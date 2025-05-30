import clsx from "clsx";
import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-emerald-600 text-white hover:bg-emerald-700",
        outline: "border border-gray-200 text-gray-700 hover:bg-gray-100",
      },
      size: {
        sm: "h-8 px-3",
        md: "h-10 px-4",
        lg: "h-12 px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  variant,
  size,
  className,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? React.Fragment : "button";
  return (
    <Comp className={clsx(buttonVariants({ variant, size }), className)} {...props} />
  );
}
