import { useEffect, useRef, useState } from "react";

const useScrollPercentage = () => {
  const scrollRef = useRef<HTMLElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState<number>(NaN);

  const reportScroll = (element: any) => {
    setScrollPercentage(getScrollPercentage(element.target));
  };

  useEffect(() => {
    const node = scrollRef.current;
    if (node !== null) {
      node.addEventListener("scroll", reportScroll, { passive: true });
      if (Number.isNaN(scrollPercentage)) {
        setScrollPercentage(getScrollPercentage(node));
      }
    }
    return () => {
      if (node !== null) {
        node.removeEventListener("scroll", reportScroll);
      }
    };
  }, [scrollPercentage]);

  return [scrollRef, Number.isNaN(scrollPercentage) ? 0 : scrollPercentage];
};

const getScrollPercentage = (element: any) => {
  if (element === null) {
    return NaN;
  }
  const height = element.scrollHeight - element.clientHeight;
  return Math.round((element.scrollTop / height) * 100);
};

export default useScrollPercentage;
