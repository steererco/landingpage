import React from "react";
import { content } from "./terms";
const Page = () => {
  return (
    <div className="container mx-auto py-4 bg-white text-black">
      <h1 className="text-3xl font-bold">Terms</h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};

export default Page;
