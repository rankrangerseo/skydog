"use client";
import React, { ChangeEvent, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  customClass?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type = "text",
  placeholder,
  customClass,
  disabled = false,
  onChange,
  className,
  ...rest
}) => {
  return (
    <input
      className={twMerge(
        "",
        disabled && "opacity-70 pointer-events-none",
        customClass,
        className
      )}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      {...rest}
    />
  );
};

export default InputField;
