"use server";

import { HfInference } from "@huggingface/inference";

const hf = new HfInference(process.env.HUGGIE_ACCESS_TOKEN);

console.log(process.env.HUGGIE_ACCESS_TOKEN);

const generateBlog = async (prompt: string): Promise<string> => {
  try {
    const response = await hf.textGeneration({
      model: "describeai/gemini", // Use a free and fast model
      inputs: prompt,
      parameters: {
        max_new_tokens: 300,
        temperature: 0.7,
        do_sample: true,
      },
    });

    const generatedTitles = response.generated_text;
    console.log(generatedTitles); // Print the titles directly

    return generatedTitles;
  } catch (error) {
    console.error("Error generating blog:", error);
    throw new Error("Failed to generate blog content");
  }
};

export default generateBlog;
