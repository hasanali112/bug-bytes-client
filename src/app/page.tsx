"use client";
import { useState } from "react";
import generateBlog from "@/services/generateBlog";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedText, setGeneratedText] = useState<string | null>(null);

  const handleGenerateBlog = async (text: string) => {
    if (!text.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await generateBlog(text);
      setGeneratedText(response); // Now response will always be a string or throw an error
      console.log(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate blog");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-40">
      <h1>Enter your prompt</h1>
      <input
        type="text"
        onBlur={(e) => handleGenerateBlog(e.target.value)}
        className="border w-[300px] h-[45px] rounded-lg pl-5"
      />
      {loading && <p>Generating...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {generatedText && (
        <div className="mt-4 p-4 border rounded">
          <p>{generatedText}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
