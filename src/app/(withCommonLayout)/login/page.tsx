"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useMutation, gql } from "@apollo/client";
import { setTokenInCookie } from "@/services/setTokenInCookie";

const loginUser = gql`
  mutation Login($input: ILogin) {
    login(input: $input) {
      token
    }
  }
`;

const Login = () => {
  const [login, { data: loginData, loading, error }] = useMutation(loginUser);
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    login({ variables: { input: data } });
    if (loginData) {
      const token = loginData?.login?.token;
      await setTokenInCookie(token);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(loginData);

  return (
    <div className="flex flex-col items-center justify-center pt-40">
      <h1>login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-5 flex-col">
        <input
          type="text"
          {...register("email")}
          placeholder="Email"
          className="border w-[300px] h-[45px] rounded-lg pl-5"
        />
        <input
          type="text"
          {...register("password")}
          placeholder="password"
          className="border w-[300px] h-[45px] rounded-lg pl-5"
        />
        <button
          type="submit"
          className="border px-4 py-1 border-gray-400 rounded-md bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-gray-900 shadow-sm"
        >
          login
        </button>
      </form>
    </div>
  );
};

export default Login;
