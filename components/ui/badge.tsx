import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium",
  {
    variants: {
      variant: {
        default: "bg-gray-100 text-gray-800",
        outline: "border border-gray-200 text-gray-600",
        secondary: "bg-emerald-100 text-emerald-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={clsx(badgeVariants({ variant }), className)} {...props} />
  );
}
