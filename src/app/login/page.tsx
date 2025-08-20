import BForm from "@/component/form/BForm";
import BInput from "@/component/form/BInput";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/assets/techghor.png";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Login = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <div className="flex flex-col items-center justify-center pt-40">
        <div className="w-full mb-10 flex items-center justify-center gap-3">
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="w-10 h-10"
          />
          <h1 className="text-3xl font-semibold text-center">
            Welcome to
            <span className="text-purple-700 ml-3">BugBytes</span>
          </h1>
        </div>
        <div className="w-[40%] mx-auto">
          <BForm onSubmit={onSubmit}>
            <div className="w-full flex flex-col items-center gap-4">
              <BInput name="email" label="Enter your email" type="email" />
              <BInput
                name="password"
                label="Enter your password"
                type="password"
              />
            </div>
            <Button
              type="submit"
              className="border border-purple-400 w-full px-4 py-1 rounded-md bg-purple-500 hover:bg-gray-100  hover:text-gray-900 shadow-sm mt-5 text-lg text-gray-200"
            >
              login
            </Button>
          </BForm>
        </div>
      </div>
    </div>
  );
};

export default Login;
