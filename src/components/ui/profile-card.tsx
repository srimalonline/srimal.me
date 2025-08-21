"use client";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import Image from "next/image";

interface ProfileCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  name: string;
  title: string | React.ReactNode;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  badges?: string[];
  socials?: Array<{
    icon: React.ReactNode;
    href: string;
    label: string;
  }>;
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

export const ProfileCard = forwardRef<HTMLDivElement, ProfileCardProps>(
  ({ 
    name,
    title,
    description,
    imageSrc,
    imageAlt,
    badges = [],
    socials = [],
    size = "md",
    animated = true,
    className,
    ...props 
  }, ref) => {
    const sizes = {
      sm: {
        card: "p-4 max-w-xs",
        image: "w-16 h-16",
        name: "text-lg",
        title: "text-sm",
        desc: "text-xs"
      },
      md: {
        card: "p-6 max-w-sm", 
        image: "w-24 h-24",
        name: "text-xl",
        title: "text-base",
        desc: "text-sm"
      },
      lg: {
        card: "p-8 max-w-md",
        image: "w-32 h-32", 
        name: "text-2xl",
        title: "text-lg",
        desc: "text-base"
      }
    };

    const currentSize = sizes[size];

    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md overflow-hidden group",
          animated && "transition-all duration-300 hover:scale-105 hover:bg-black/30",
          currentSize.card,
          className
        )}
        {...props}
      >
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
        
        {/* Glass reflection */}
        {animated && (
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)"
            }}
          />
        )}

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Profile Image with glow effect */}
          <div className="relative mx-auto mb-4">
            <div className={cn(
              "relative rounded-full overflow-hidden border-2 border-white/20 mx-auto",
              currentSize.image,
              animated && "group-hover:border-blue-400/50 transition-colors duration-300"
            )}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            
            {/* Glow ring */}
            {animated && (
              <div className={cn(
                "absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10",
                currentSize.image
              )} />
            )}
          </div>

          {/* Name */}
          <h3 className={cn(
            "font-bold text-white mb-1",
            currentSize.name
          )}>
            {name}
          </h3>

          {/* Title */}
          <div className={cn(
            "text-blue-400 font-medium mb-3",
            currentSize.title
          )}>
            {title}
          </div>

          {/* Description */}
          {description && (
            <p className={cn(
              "text-gray-300 leading-relaxed mb-4",
              currentSize.desc
            )}>
              {description}
            </p>
          )}

          {/* Badges */}
          {badges.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          {/* Social Links */}
          {socials.length > 0 && (
            <div className="flex justify-center gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Border glow on hover */}
        {animated && (
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        )}
      </div>
    );
  }
);

ProfileCard.displayName = "ProfileCard";