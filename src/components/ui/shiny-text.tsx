"use client";
import { cn } from "@/lib/utils";

interface ShinyTextProps {
  children: React.ReactNode;
  className?: string;
  shimmerWidth?: number;
  disabled?: boolean;
}

export function ShinyText({ 
  children, 
  className, 
  shimmerWidth = 100,
  disabled = false,
}: ShinyTextProps) {
  return (
    <div
      className={cn(
        "relative inline-block overflow-hidden",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      {!disabled && (
        <div
          className="absolute inset-0 -z-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"
          style={{
            backgroundSize: `${shimmerWidth}% 100%`,
            animation: "shimmer 3s ease-in-out infinite",
          }}
        />
      )}
    </div>
  );
}

// Add shimmer animation to globals.css or create a separate CSS module
export const shimmerStyles = `
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
  100% { transform: translateX(100%); }
}

.animate-shimmer {
  animation: shimmer 3s ease-in-out infinite;
}
`;