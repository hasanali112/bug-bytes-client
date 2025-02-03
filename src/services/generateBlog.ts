"use server";

import { HfInference } from "@huggingface/inference";

const hf = new HfInference(process.env.HUGGIE_ACCESS_TOKEN);

console.log(process.env.HUGGIE_ACCESS_TOKEN);

const generateBlog = async (prompt: string): Promise<string> => {
  if (!prompt.trim()) {
    throw new Error("Prompt cannot be empty");
  }

  try {
    const response = await hf.textGeneration({
      model: "gpt2",
      inputs: prompt,
      parameters: {
        max_new_tokens: 1000,
        temperature: 0.7,
        do_sample: true,
      },
    });

    if (!response?.generated_text) {
      throw new Error("Failed to generate text");
    }

    return response.generated_text;
  } catch (error) {
    console.error("Error generating blog:", error);
    throw new Error("Failed to generate blog content");
  }
};

export default generateBlog;
