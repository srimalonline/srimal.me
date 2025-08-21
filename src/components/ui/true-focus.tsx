"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TrueFocusProps {
  items: string[];
  className?: string;
  interval?: number;
  pauseOnHover?: boolean;
}

export function TrueFocus({ 
  items, 
  className, 
  interval = 3000,
  pauseOnHover = true 
}: TrueFocusProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || items.length <= 1) return;

    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
        setIsVisible(true);
      }, 200);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval, isPaused]);

  if (items.length === 0) return null;

  return (
    <div
      className={cn("inline-block", className)}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <span
        className={cn(
          "inline-block transition-all duration-200 ease-in-out",
          isVisible 
            ? "opacity-100 transform translate-y-0" 
            : "opacity-0 transform -translate-y-2"
        )}
      >
        {items[currentIndex]}
      </span>
    </div>
  );
}