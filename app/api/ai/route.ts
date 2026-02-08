// app/api/ai/route.ts
import { NextResponse } from "next/server";
import { translateTexts } from "@/lib/agents/tools/jsonTranslation";
import { MultiLangI18nPayload, simplifyJsonForMultiLangI18n } from "@/lib/multiLangJsonSimplifier";

/** 多语言结果格式：{ [langCode]: { [keyPath]: translatedText } }，与前端 parseAiResponse multiLang 一致 */
type MultiLangResult = Record<string, Record<string, string>>;

/** 延长 AI 接口超时时间（多语言逐语言翻译可能较慢） */
export const maxDuration = 60;

export async function POST(req: Request) {
    try {
        const body = await req.json();
        if (!body?.payload) {
            return NextResponse.json(
                { error: "缺少有效的 payload 参数" },
                { status: 400 }
            );
        }

        if (!body?.sourceLang || !body?.targetLangs) {
            return NextResponse.json(
                { error: "缺少有效的 sourceLang 或 targetLangs 参数" },
                { status: 400 }
            );
        }

        const payload = simplifyJsonForMultiLangI18n(body?.payload, {
            sourceLang: body?.sourceLang,
            targetLangs: body?.targetLangs,
        }) as MultiLangI18nPayload;

        if (!process.env.MOONSHOT_API_KEY) {
            return NextResponse.json(
                { error: "未配置 MOONSHOT_API_KEY 环境变量" },
                { status: 500 }
            );
        }

        const keys = Object.keys(payload.entries);
        const texts = Object.values(payload.entries);
        if (keys.length === 0) {
            const empty: MultiLangResult = {};
            for (const lang of payload.targetLangs) {
                empty[lang] = {};
            }
            return new Response(JSON.stringify(empty), {
                headers: { "Content-Type": "application/json; charset=utf-8" },
            });
        }

        const result: MultiLangResult = {};
        for (const targetLang of payload.targetLangs) {
            const translated = await translateTexts(
                payload.sourceLang,
                targetLang,
                texts
            );
            result[targetLang] = {};
            keys.forEach((key, i) => {
                result[targetLang][key] = translated[i] ?? texts[i];
            });
        }

        return new Response(JSON.stringify(result), {
            headers: { "Content-Type": "application/json; charset=utf-8" },
        });
    } catch (err) {
        console.error("[API /api/ai]", err);
        const message = err instanceof Error ? err.message : "AI 服务调用失败";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}   