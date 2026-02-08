export interface MultiLangI18nPayload {
    sourceLang: string;
    targetLangs: string[];
    entries: Record<string, string>;
}

function needsTranslation(text: string, sourceLang: string) {
    // 当前策略：中文源语言
    if (sourceLang === "zh") {
        return /[\u4e00-\u9fa5]/.test(text);
    }
    // 未来可以扩展 lang detect
    return true;
}

export function simplifyJsonForMultiLangI18n(
    jsonString: string,
    options: {
        sourceLang?: string;
        targetLangs: string[];
    }
): MultiLangI18nPayload {
    const sourceLang = options.sourceLang ?? "zh";

    let data: any;
    try {
        data = JSON.parse(jsonString);
    } catch {
        throw new Error("Invalid JSON string");
    }

    const entries: Record<string, string> = {};

    function walk(value: any, path: string[]) {
        if (typeof value === "string") {
            if (needsTranslation(value, sourceLang)) {
                entries[path.join(".")] = value;
            }
            return;
        }

        if (Array.isArray(value)) {
            value.forEach((item, index) => {
                walk(item, [...path, String(index)]);
            });
            return;
        }

        if (typeof value === "object" && value !== null) {
            for (const [key, val] of Object.entries(value)) {
                walk(val, [...path, key]);
            }
        }
    }

    walk(data, []);
    console.log('*********************simplifyJsonForMultiLangI18n***********************************')
    console.log('sourceLang', sourceLang);
    console.log('targetLangs', options.targetLangs);
    console.log('entries', entries);
    console.log('********************************************************')
    return {
        sourceLang,
        targetLangs: options.targetLangs,
        entries,
    };
}
