/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/libs/AxiosInstance";

export const createPost = async (formData: FormData) => {
  try {
    const { data } = await axiosInstance.post(
      "/article/create-article",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getAllArticles = async () => {
  try {
    const res = await fetch(
      "https://tech-ghor-server.vercel.app/api/v1/article",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "force-cache",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch articles");
    }
    return res.json();
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getSingleArticle = async (id: string) => {
  try {
    const res = await fetch(
      `https://tech-ghor-server.vercel.app/api/v1/article/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "force-cache",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch article");
    }
    return res.json();
  } catch (error: any) {
    throw new Error(error);
  }
};
