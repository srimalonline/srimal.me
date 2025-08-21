"use client";

import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaRss,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "../lib/config";

const YEAR = new Date().getFullYear();

type SocialLinkProps = {
  href: string;
  icon: React.ComponentType;
};

function SocialLink({ href, icon: Icon }: SocialLinkProps) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:text-blue-500 dark:hover:text-purple-400 transition-all duration-300 hover:scale-110 glow"
    >
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-4 justify-center md:justify-end transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} />
      <a href="/rss.xml" target="_self" className="hover:text-blue-500 dark:hover:text-purple-400 transition-colors duration-300">
        <FaRss />
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="glass rounded-t-3xl mt-24 p-8 mx-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto">
        <div className="text-center md:text-left">
          <p className="text-lg font-medium text-gradient mb-2">
            {metaData.title}
          </p>
          <p className="text-sm text-slate-600 dark:text-gray-400">
            © {YEAR} • Building the future with code
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-4">
          <SocialLinks />
          <p className="text-xs text-gray-500 dark:text-gray-500 text-center">
            Made with ❤️ and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
}