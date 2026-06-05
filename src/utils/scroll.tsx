import { MutableRefObject } from "react";

export const handleScroll = (ref: any) => {
  ref.current.scrollIntoView({ behavior: "smooth" });
};

//TODO: ask about this
