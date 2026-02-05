"use client";

import { useAtom } from "jotai";
import { useEffect, useState, useRef } from "react";

type TextInputProps = {
  direction?: "left" | "right" | "none";
  length?: "short" | "long";
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function TextInput({ direction, ...props }: TextInputProps) {
  return (
    <input
      className={`relative w-30 py-1 px-2
  border rounded
  outline-none 
  ${
    direction === "left"
      ? "rounded-r-none border-r-0"
      : direction === "right"
        ? "rounded-l-none"
        : ""
  }`}
      {...props}
    ></input>
  );
}
