import axios from 'axios';
import fs from 'fs';
import path from 'path';

const API_KEY = 'AIzaSyC0ZrBzIxWgc0jV7VGcAEcBRANoJVsSTiw';
const BASE_LANG = 'en';
const TARGET_LANGS = [
  'es', 'fr', 'pt', 'de', 'ar', 'hi', 'bn', 'zh-CN', 'ja', 'id', 'tr', 'vi', 'ko', 'ru', 'it', 'pl', 'th', 'tl'
];

async function translateText(text: string, targetLang: string) {
  try {
    const response = await axios.post(
      `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
      {
        q: text,
        target: targetLang,
        format: 'text'
      }
    );
    return response.data.data.translations[0].translatedText;
  } catch (error: any) {
    console.error(`Error translating to ${targetLang}:`, error.response?.data || error.message);
    return text;
  }
}

async function translateObject(obj: any, targetLang: string): Promise<any> {
  const result: any = {};
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      result[key] = await translateText(obj[key], targetLang);
    } else if (Array.isArray(obj[key])) {
      result[key] = await Promise.all(obj[key].map((item: any) => translateText(item, targetLang)));
    } else if (typeof obj[key] === 'object') {
      result[key] = await translateObject(obj[key], targetLang);
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}

async function main() {
  const baseFile = path.resolve('public/locales/en/translation.json');
  const baseData = JSON.parse(fs.readFileSync(baseFile, 'utf8'));

  for (const lang of TARGET_LANGS) {
    console.log(`Translating to ${lang}...`);
    const translatedData = await translateObject(baseData, lang);
    const dir = path.resolve(`public/locales/${lang}`);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(path.join(dir, 'translation.json'), JSON.stringify(translatedData, null, 2));
  }
  console.log('Done!');
}

main();
