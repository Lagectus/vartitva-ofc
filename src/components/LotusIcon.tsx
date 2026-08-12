"use client";

import React from "react";

export function LotusIcon({ className = "w-6 h-6", strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central Petal */}
      <path
        d="M100 15 C85 50 85 85 100 100 C115 85 115 50 100 15 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth * 3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner Left Petal */}
      <path
        d="M100 100 C75 90 55 60 70 30 C88 50 96 75 100 100 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth * 3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner Right Petal */}
      <path
        d="M100 100 C125 90 145 60 130 30 C112 50 104 75 100 100 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth * 3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Outer Left Petal */}
      <path
        d="M100 100 C60 95 30 75 42 48 C68 62 86 82 100 100 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth * 3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Outer Right Petal */}
      <path
        d="M100 100 C140 95 170 75 158 48 C132 62 114 82 100 100 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth * 3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Base Line Left */}
      <line
        x1="20"
        y1="100"
        x2="75"
        y2="100"
        stroke="currentColor"
        strokeWidth={strokeWidth * 3}
        strokeLinecap="round"
      />
      {/* Base Line Right */}
      <line
        x1="125"
        y1="100"
        x2="180"
        y2="100"
        stroke="currentColor"
        strokeWidth={strokeWidth * 3}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LogoEmblem({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative rounded-2xl bg-gradient-to-tr from-[#d97706] via-[#f59e0b] to-[#fde047] flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/20 ${className}`}>
      <LotusIcon className="w-3/4 h-3/4 text-slate-950" strokeWidth={1.8} />
    </div>
  );
}
