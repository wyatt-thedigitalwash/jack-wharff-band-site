"use client";

import { useInView } from "@/hooks/useInView";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}

export default function FadeIn({ children, className = "" }: FadeInProps) {
  const { ref, inView } = useInView(0.15);

  return (
    <div
      ref={ref}
      className={`block-fade ${inView ? "block-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
