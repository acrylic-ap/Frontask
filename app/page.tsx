"use client";

import { useAtom } from "jotai";
import { useEffect, useState, useRef } from "react";
import Button from "@/app/common/components/Button";
import TextInput from "./common/components/TextInput";

const Header = () => {
  return (
    <div className="relative w-full h-[10%]">
      <h1
        className="absolute left-4 top-1/2 -translate-y-1/2
      text-3xl font-semibold"
      >
        Frontask
      </h1>
    </div>
  );
};

const Section = () => {
  const [element, setElement] = useState("");

  const handleElementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setElement(e.target.value);
  };

  const [elementList, setElementList] = useState<string[]>([]);

  const submitElement = () => {
    if (!element) return;

    setElementList((item) => [...item, element]);
    setElement("");
  };

  return (
    <div className="relative w-full h-[80%]">
      <div className="pl-3">
        <TextInput
          direction="left"
          placeholder="요소 입력"
          value={element}
          onChange={handleElementChange}
          onKeyDown={(e) => e.key === "Enter" && submitElement()}
        />
        <Button direction="right" text="확인" onClick={submitElement} />
      </div>

      <div className="pl-3 pt-3">
        {elementList.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return <div className="relative w-full h-[10%]"></div>;
};

export default function App() {
  return (
    <div className="relative w-full h-full">
      <Header />
      <Section />
      <Footer />
    </div>
  );
}
