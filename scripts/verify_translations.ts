
import { translations } from "../lib/translations";

function getKeys(obj: any, prefix = ""): string[] {
    let keys: string[] = [];
    for (const key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            keys = keys.concat(getKeys(obj[key], `${prefix}${key}.`));
        } else {
            keys.push(`${prefix}${key}`);
        }
    }
    return keys;
}

const enKeys = getKeys(translations.en);
const languages = Object.keys(translations).filter((lang) => lang !== "en");
let hasErrors = false;

languages.forEach((lang) => {
    const langKeys = getKeys(translations[lang as keyof typeof translations]);
    const missingKeys = enKeys.filter((key) => !langKeys.includes(key));

    if (missingKeys.length > 0) {
        console.error(`[${lang}] Missing keys:`);
        missingKeys.forEach((k) => console.error(`  - ${k}`));
        hasErrors = true;
    } else {
        // Check for extra keys (optional but good for cleanup)
        const extraKeys = langKeys.filter((key) => !enKeys.includes(key));
        if (extraKeys.length > 0) {
            console.warn(`[${lang}] Extra keys (not in en):`);
            extraKeys.forEach((k) => console.warn(`  - ${k}`));
        } else {
            console.log(`[${lang}] All keys present.`);
        }
    }
});

if (hasErrors) {
    process.exit(1);
} else {
    console.log("All translations are complete!");
}
