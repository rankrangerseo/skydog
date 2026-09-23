"use client";
import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface PrimaryButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  text: string;
  customClass?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  customClass,
  onClick,
  disabled = false,
  Icon,
  className,
  ...rest
}) => {
  return (
    <button
      className={twMerge(
        " py-2   flex items-center justify-center",
        disabled && "opacity-70 pointer-events-none",
        customClass,
        className
      )}
      onClick={onClick}
      disabled={disabled}
      {...rest}>
      {text}
      {Icon && <Icon className="ml-2" />}
    </button>
  );
};

export default PrimaryButton;
