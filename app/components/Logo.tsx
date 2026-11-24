"use client";

import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <img className={cn("shrink-0", className)} src="/brand-mark.svg" width="28" height="28" alt="" />
  );
}

export default function Logo({
  className,
  markClassName,
  wordmark = true,
}: {
  className?: string;
  markClassName?: string;
  wordmark?: boolean;
}) {
  return (
    <span
      className={cn("inline-flex select-none items-center gap-2.5", className)}
    >
      <LogoMark className={cn("size-7 shrink-0", markClassName)} />
      {wordmark && (
        <span className="text-[1.0625rem] font-bold leading-none tracking-[-0.02em] text-foreground">
          Glyph Foundry
        </span>
      )}
    </span>
  );
}
