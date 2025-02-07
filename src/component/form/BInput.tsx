"use client";

import { Input } from "@heroui/input";
import { useFormContext } from "react-hook-form";

interface IInputProps {
  name: string;
  size?: "sm" | "md" | "lg";
  variant?: "flat" | "bordered" | "faded" | "underlined";
  label: React.ReactNode;
  type?: "text" | "email" | "url" | "password" | "tel" | "search" | "file";
}

const BInput = ({
  name,
  size = "md",
  variant = "bordered",
  label,
  type = "text",
}: IInputProps) => {
  const { register } = useFormContext();
  return (
    <Input
      type={type}
      {...register(name)}
      size={size}
      variant={variant}
      label={label}
      fullWidth={true}
    />
  );
};

export default BInput;
