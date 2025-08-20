"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller } from "react-hook-form";

type IInputProps = {
  name: string;
  placeholder?: string;
  label: string;
  type?: "text" | "email" | "url" | "password" | "tel" | "search" | "file";
};

const BInput = ({ name, label, type = "text", placeholder }: IInputProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div>
          <Label htmlFor={name}>{label}</Label>
          <Input
            {...field} //register, onChange, onBlur etc
            id={name}
            type={type}
            placeholder={placeholder}
            className={`w-full mt-1 ${
              error ? "border-red-500 focus:border-red-500" : ""
            }`}
          />
          {error && <p className="text-red-500">{error.message}</p>}
        </div>
      )}
    />
  );
};

export default BInput;
