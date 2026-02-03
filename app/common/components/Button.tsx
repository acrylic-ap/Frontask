"use client";

import { useAtom } from "jotai";
import { useEffect, useState, useRef } from "react";

export default function Button({ text }: { text: string }) {
  return (
    <button
      className="relative bg-gray-800
  text-gray-200"
    >
      {text}
    </button>
  );
}
