import { useEffect, useRef, useState } from "react";
import "../styles/heropage.css";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

export default function Hero() {
  const texts = ["An Aspiring Barista", "Frontend Dev", "Graphic Designer"];
  const [index, setIndex] = useState(0);
  const textRef = useRef();

  useEffect(() => {
    const textInterval = setInterval(() => {
      setIndex((i) => (i + 1) % texts.length);
    }, 1000 * 2.5);

    return () => clearInterval(textInterval);
    // react tutorial by brocode has this information, and learning gsap official teaches the other stuff
  }, [texts.length]);

  useEffect(() => {
    const splitText = new SplitText(textRef.current, { type: "chars" });
    gsap.fromTo(
      splitText.chars,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 1, ease: "elastic"}
    );
  });

  return (
    <div className="hero-section" id="hero">
      <div className="heading-one headers">I'm Querubin,</div>
      <div ref={textRef} className="heading-two headers">
        {texts[index]}
      </div>
    </div>
  );
}
