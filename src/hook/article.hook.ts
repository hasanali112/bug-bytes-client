/* eslint-disable @typescript-eslint/no-explicit-any */

import { createPost } from "@/services/articleService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateArticle = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_ARTICLE"],
    mutationFn: async (formData) => await createPost(formData),
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
