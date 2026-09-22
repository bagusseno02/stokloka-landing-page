import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";
export function Card({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn("rounded-2xl border border-border bg-card p-6", className)} {...props} />
  );
}
