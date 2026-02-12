// lib/agents/tools/jsonTranslation.ts
import { DynamicTool } from "@langchain/core/tools";
import { ChatOpenAI } from "@langchain/openai";

function getTranslationModel() {
  return new ChatOpenAI({
    modelName: "moonshot-v1-8k",
    apiKey: process.env.MOONSHOT_API_KEY,
    configuration: {
      baseURL: "https://api.moonshot.cn/v1",
    },
  });
}

/** 从模型返回内容中解析出 JSON 字符串数组，支持裸 JSON 或 markdown 代码块 */
function parseTranslationsResponse(raw: string): string[] {
  const trimmed = raw?.trim() ?? "";
  let jsonStr = trimmed;
  const codeBlock = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (codeBlock) {
    jsonStr = codeBlock[1].trim();
  }
  const parsed = JSON.parse(jsonStr) as unknown;
  if (!Array.isArray(parsed)) {
    throw new Error("Translation response is not a JSON array");
  }
  return parsed.map((x) => (typeof x === "string" ? x : String(x ?? "")));
}

/**
 * 将一组文案从 sourceLang 翻译到 targetLang，返回与输入顺序一致的翻译结果数组。
 * 供 API 按多目标语言循环调用，保证每个语言都被翻译。
 */
export async function translateTexts(
  sourceLang: string,
  targetLang: string,
  texts: string[]
): Promise<string[]> {
  if (texts.length === 0) return [];

  const model = getTranslationModel();
  const res = await model.invoke([
    {
      role: "system",
      content: `
You are a professional translation engine.
Translate texts from ${sourceLang} to ${targetLang}.
Return ONLY a JSON array of translated strings.
Do NOT explain anything.
      `.trim(),
    },
    {
      role: "user",
      content: JSON.stringify(texts),
    },
  ]);

  const content = typeof res.content === "string" ? res.content : String(res.content ?? "[]");
  const translated = parseTranslationsResponse(content);
  // 保证返回长度与输入一致，不足时用原文补齐
  return texts.map((orig, i) => translated[i] ?? orig);
}

export const jsonTranslationTool = new DynamicTool({
  name: "translate_texts",
  description: `
Translate an array of texts from sourceLang to targetLang.
Return translations in the same order.
Do not add explanations.
`,
  func: async (input: string) => {
    let payload: {
      sourceLang: string;
      targetLang: string;
      texts: string[];
    };

    try {
      payload = JSON.parse(input);
    } catch {
      throw new Error("Input must be a JSON string");
    }

    const { sourceLang, targetLang, texts } = payload;
    const translated = await translateTexts(sourceLang, targetLang, texts);
    return JSON.stringify(translated);
  },
});