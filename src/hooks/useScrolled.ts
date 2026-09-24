// src/hooks/useScrolled.ts

import { useEffect, useState } from "react";
import { HEADER_SCROLL_OFFSET } from "../lib/constants";

export function useScrolled(offset = HEADER_SCROLL_OFFSET) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > offset);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return scrolled;
}
