"use client";

import { useAtom } from "jotai";
import { useEffect, useState, useRef } from "react";
import Button from "./common/components/Button";

const Header = () => {
  return (
    <div className="relative w-full h-[10%]">
      <Button text="확인" />
    </div>
  );
};

const Section = () => {
  return <div className="relative w-full h-[80%]"></div>;
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
