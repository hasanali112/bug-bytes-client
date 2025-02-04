import GeneratePostForm from "../../_component/createPost/GeneratePostForm";

const CreatePost = () => {
  return (
    <div className="pt-5">
      <h1 className="text-2xl font-semibold">
        Create Posts Without Any Hassle – Manually or with AI! Generate
        Unlimited Content Effortlessly
      </h1>
      <p className="mt-2">
        Are you tired of spending hours brainstorming ideas, writing, and
        editing posts? Whether you&apos;re a content creator, marketer, or
        business owner, creating engaging content can be time-consuming and
        challenging. But it doesn&apos;t have to be! With the right tools and
        strategies, you can create unlimited posts—manually or with the help of
        AI—quickly and efficiently.
      </p>
      <h1 className="mt-4 mb-3">Generate A Title with AI</h1>
      <GeneratePostForm />
    </div>
  );
};

export default CreatePost;
