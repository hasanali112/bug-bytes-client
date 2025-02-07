"use client";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useMutation, gql } from "@apollo/client";
import { setTokenInCookie } from "@/services/setTokenInCookie";
import BForm from "@/component/form/BForm";
import BInput from "@/component/form/BInput";
import { Button } from "@heroui/button";
import Link from "next/link";

const registeredUser = gql`
  mutation Register($input: IRegisterUser) {
    registerUser(input: $input) {
      token
    }
  }
`;

const Register = () => {
  const [registerUser, { data: registerData, loading, error }] =
    useMutation(registeredUser);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    registerUser({ variables: { input: data } });
    if (registerData) {
      const token = registerData?.registerUser?.token;
      await setTokenInCookie(token);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(registerData);

  return (
    <div className="flex flex-col items-center justify-center pt-40">
      <div className="w-full mb-10">
        <h1 className="text-3xl font-semibold text-center">
          Registration to create{" "}
          <span className="text-purple-700">BugBytes</span> Account
        </h1>
      </div>
      <div className="w-[40%] mx-auto">
        <BForm onSubmit={onSubmit}>
          <div className="w-full flex flex-col items-center gap-4">
            <BInput name="name" label="Enter your Full Name" />
            <BInput name="email" label="Enter your email" type="email" />
            <BInput
              name="password"
              label="Enter your password"
              type="password"
            />
            <BInput name="contactNumber" label="Enter your contact number" />
          </div>
          <Button
            type="submit"
            className="border border-purple-400 w-full px-4 py-1 rounded-md bg-purple-500 hover:bg-gray-100  hover:text-gray-900 shadow-sm mt-5 text-lg text-gray-200"
          >
            Create Account
          </Button>
        </BForm>
        <p className="text-lg text-gray-600 mt-4 text-center">
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
