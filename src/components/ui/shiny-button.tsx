"use client";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  shimmerColor?: string;
}

export const ShinyButton = forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ 
    children, 
    className, 
    variant = "default", 
    size = "md",
    shimmerColor = "rgba(255, 255, 255, 0.3)",
    disabled,
    ...props 
  }, ref) => {
    const baseClasses = "relative inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 overflow-hidden group";
    
    const variants = {
      default: "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105",
      secondary: "bg-gray-800/50 text-white border border-gray-700 hover:bg-gray-700/50",
      outline: "border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400"
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base", 
      lg: "px-8 py-4 text-lg"
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          disabled && "opacity-50 cursor-not-allowed hover:scale-100",
          className
        )}
        disabled={disabled}
        {...props}
      >
        {!disabled && (
          <div 
            className="absolute inset-0 -z-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{ backgroundColor: shimmerColor }}
          />
        )}
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

ShinyButton.displayName = "ShinyButton";