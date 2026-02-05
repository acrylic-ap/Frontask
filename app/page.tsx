"use client";

import { useAtom } from "jotai";
import { useEffect, useState, useRef } from "react";
import Button from "@/app/common/components/Button";
import TextInput from "@/app/common/components/TextInput";
import { Component } from "./components/Component";

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
  const [componentList, setComponentList] = useState<Set<string>>(
    new Set<string>(),
  );
  const [component, setComponent] = useState("");

  const handleComponentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComponent(e.target.value);
  };

  const submitComponent = () => {
    if (!component) return;

    if (!componentList.has(component))
      setComponentList((item) => item.add(component));
    else alert("이미 존재하는 컴포넌트입니다.");

    setComponent("");
  };

  return (
    <div className="relative w-full h-[80%]">
      <div className="pl-3">
        <TextInput
          direction="left"
          placeholder="컴포넌트 입력"
          value={component}
          onChange={handleComponentChange}
          onKeyDown={(e) => e.key === "Enter" && submitComponent()}
        />
        <Button direction="right" text="확인" onClick={submitComponent} />
      </div>

      <div className="pl-3 pt-5">
        {Array.from(componentList).map((name) => (
          <Component name={name} />
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
