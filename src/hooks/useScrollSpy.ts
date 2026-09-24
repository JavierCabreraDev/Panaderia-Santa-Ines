import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], offset = 120) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";

      for (const id of ids) {
        const element = document.getElementById(id);

        if (!element) continue;

        const { top } = element.getBoundingClientRect();

        if (top <= offset) {
          current = id;
        }
      }

      setActiveId(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids, offset]);

  return activeId;
}
