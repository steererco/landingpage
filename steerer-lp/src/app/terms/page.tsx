import React from "react";
import { content } from "./terms";
import { Header, Logo } from "@/components/Header";
import Link from "next/link";
const Page = () => {
  return (
    <div className="container mx-auto py-4 bg-white text-black">
      <header className="flex justify-between items-center border-b pb-3 mb-6">
        <Logo />
      </header>
      <h1 className="text-3xl font-bold">Terms</h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};

export default Page;
