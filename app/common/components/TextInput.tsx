"use client";

import { useAtom } from "jotai";
import { useEffect, useState, useRef } from "react";

type TextInputProps = {
  direction?: "left" | "right" | "none";
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function TextInput({ direction, ...props }: TextInputProps) {
  return (
    <input
      className={`relative py-1 pl-2
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
