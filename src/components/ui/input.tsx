import type { InputHTMLAttributes } from "react";
import { cn } from "@/utils/cn";
export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn("w-full rounded-xl border border-border bg-card px-4 py-3", className)}
      {...props}
    />
  );
}
