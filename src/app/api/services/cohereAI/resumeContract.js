import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
  token: process.env.COHERE_APIKEY
});

export const resumeContract = async (pdf) => {
  const prompt = `Summarize the following contract, highlighting the key points in the original language. Provide a concise yet comprehensive overview, emphasizing the crucial terms, conditions, and obligations outlined in the document. Ensure that the summary captures the essence of the contract while maintaining accuracy and clarity in the language used, please respect the original lenguage: ${pdf.text}`;

  const response = await cohere.generate({
    prompt
  });

  return response;
};
