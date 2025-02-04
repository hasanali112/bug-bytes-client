/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { GoogleGenerativeAI } from "@google/generative-ai";

const generatingBlog = async (prompt: string): Promise<any> => {
  try {
    const genAI = new GoogleGenerativeAI(
      process.env.NEXT_PUBLIC_GEMINI_API_KEY as string
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.log(error);
  }
};

export default generatingBlog;
