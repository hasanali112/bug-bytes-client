"use client";

import generatingBlog from "@/services/generatingBlog";
import { Button } from "@heroui/react";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const GeneratePostForm = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedText, setGeneratedText] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const promptData = `Suggest 5 titles for this topic: ${data.title}. Provide only the titles in a serialized format, like: 1. Title 2. Title 3. Title 4. Title 5. Title. Do not include any other text.`;
    try {
      setLoading(true);
      const response = await generatingBlog(promptData);
      setGeneratedText(response);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Failed to generate blog"
      );
    } finally {
      setLoading(false);
    }
  };

  const titleGenerate = generatedText
    ?.split("\n")
    .filter((title) => title.trim() !== "");

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("title")}
          className="border w-[300px] h-[45px] rounded-lg pl-5"
          name="title"
          placeholder="Enter your topic"
        />
        <Button
          type="submit"
          className="bg-purple-700 text-white w-[100px] h-[45px] rounded-lg ml-2"
        >
          Generate
        </Button>
      </form>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {generatedText && (
          <div className="flex flex-col gap-5 mt-5">
            {titleGenerate?.map((title, index) => (
              <div
                key={index}
                className="text-lg text-gray-700 flex gap-2 items-center"
              >
                <p>{title}</p>
                <Button className="mt-2 w-[100px] h-[25px] bg-gradient-to-r from-purple-300 via-purple-200 to-fuchsia-200">
                  Choose one
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneratePostForm;
