import OpenAI from "openai";
import LanguageDetect from 'languagedetect'
const openai = new OpenAI();

export async function resumeContract(pdf) {
  const lngDetector = new LanguageDetect();
  const detectedLanguage = lngDetector.detect(pdf.text, 1)

  const prompt = `Summarize the following contract, highlighting key points in the original language (${detectedLanguage}). Provide a concise yet comprehensive overview, emphasizing critical terms, conditions, and obligations outlined in the attached document. Ensure the summary captures the essence of the contract, maintaining accuracy and clarity in the language used (${detectedLanguage}). Attached, you will find the complete text of the contract: ${pdf.text}}`;

  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: prompt }],
    model: "gpt-3.5-turbo",
  });

  return completion;
}

