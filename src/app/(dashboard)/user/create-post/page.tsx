"use client";
import BForm from "@/component/form/BForm";
import TextEditor from "../../_component/TextEditor/TextEditor";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import BInput from "@/component/form/BInput";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useCreateArticle } from "@/hook/article.hook";

const CreatePost = () => {
  const { mutate: createArticle } = useCreateArticle();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("article-image", data.image);
    createArticle(formData);
  };

  return (
    <div className="pt-5 pb-5">
      <h1 className="text-2xl font-semibold">
        Create Posts Without Any Hassle
      </h1>
      <div className="mt-5">
        <BForm onSubmit={onSubmit} defaultValues={{ content: "" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <BInput
                name="title"
                label="Title"
                placeholder="Enter post title"
              />
            </div>
            <div>
              <BInput
                name="category"
                label="Category"
                placeholder="Enter post category"
              />
            </div>
            <div>
              <BInput name="type" label="Type" placeholder="Enter post type" />
            </div>
            <div>
              <Controller
                name="image"
                render={({ field: { onChange, value, ...rest } }) => (
                  <div>
                    <div>
                      <Label htmlFor="image">Post Image</Label>
                    </div>
                    <div className="mt-1">
                      <Input
                        id="image"
                        type="file"
                        value={value?.fileName}
                        {...rest}
                        onChange={(e) => onChange(e.target.files?.[0])}
                      />
                    </div>
                  </div>
                )}
              />
            </div>
          </div>
          <div className="mt-6">
            <Controller
              name="content"
              render={({ field }) => (
                <TextEditor value={field.value} onChange={field.onChange} />
              )}
            />
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Save Post
            </button>
          </div>
        </BForm>
      </div>
    </div>
  );
};

export default CreatePost;
