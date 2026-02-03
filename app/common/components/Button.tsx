"use client";

import { useAtom } from "jotai";
import { useEffect, useState, useRef } from "react";

type ButtonProps = {
  text: string;
  direction?: "left" | "right" | "none";
  active?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  text,
  direction,
  active,
  ...props
}: ButtonProps) {
  const commonStyle = `border border-white rounded
    text-white
    hover:text-[#c4c4c4] hover:border-[#c4c4c4]`;

  const activeStyle = `bg-[#9d00ff] rounded
    text-white
    hover:text-white hover:bg-[#8800dc]`;

  return (
    <button
      className={`relative px-4 py-1
        ${active ? activeStyle : commonStyle}
        ${
          direction === "left"
            ? "rounded-r-none border-r-0"
            : direction === "right"
              ? "rounded-l-none"
              : ""
        }`}
      {...props}
    >
      {text}
    </button>
  );
}
