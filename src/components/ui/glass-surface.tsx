"use client";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface GlassSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  blur?: "sm" | "md" | "lg" | "xl";
  opacity?: "low" | "medium" | "high";
  border?: boolean;
  glow?: boolean;
  animated?: boolean;
}

export const GlassSurface = forwardRef<HTMLDivElement, GlassSurfaceProps>(
  ({ 
    children, 
    className,
    blur = "md",
    opacity = "medium",
    border = true,
    glow = false,
    animated = true,
    ...props 
  }, ref) => {
    const blurClasses = {
      sm: "backdrop-blur-sm",
      md: "backdrop-blur-md", 
      lg: "backdrop-blur-lg",
      xl: "backdrop-blur-xl"
    };

    const opacityClasses = {
      low: "bg-white/5 dark:bg-black/10",
      medium: "bg-white/10 dark:bg-black/20", 
      high: "bg-white/20 dark:bg-black/30"
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden",
          blurClasses[blur],
          opacityClasses[opacity],
          border && "border border-white/10 dark:border-white/5",
          glow && "shadow-lg shadow-blue-500/10",
          animated && "transition-all duration-300 hover:bg-white/15 dark:hover:bg-black/25",
          className
        )}
        {...props}
      >
        {/* Glass reflection effect */}
        {animated && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />
            <div 
              className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                animation: "glass-shimmer 3s ease-in-out infinite"
              }}
            />
          </>
        )}
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Border glow effect */}
        {glow && (
          <div className="absolute -inset-px rounded-inherit bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        )}
      </div>
    );
  }
);

GlassSurface.displayName = "GlassSurface";