import { useEffect, useRef, useState } from "react";
//#region Images
import kiss_mark from "../assets/Dark_Cherry_1.png";
import kiss_mark2 from "../assets/Dark_Cherry_2.png";
import james_hoffmann from "../assets/thumbnails/James_Hoffmann.jpg";
import dero_de_barista from "../assets/thumbnails/dero_de_barista.jpg";
import connor_does_coffee from "../assets/thumbnails/Connor_does_coffee.png";
import european_coffee_trip from "../assets/thumbnails/European_Coffee_Trip.jpg";
import issackxcoffee from "../assets/thumbnails/IssackXCoffee.jpg";
import golden_brown_coffee from "../assets/thumbnails/Golden_brown_coffee.jpg";
//#endregion

import "../styles/aboutpage.css";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import { motion } from "motion/react";

//#region Golden Sock Animation Platform
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);
//#endregion

export default function About() {
  const [open, setOpen] = useState(false);
  const paragraphText = useRef(null);
  const inspoContainer = useRef();

  function goToLink() {
    window.open(
      "https://portal.lto.gov.ph/ords/f?p=PUBLIC_PORTAL:DIV:::::P202_P,P202_V:45924879,3145AC3A0724254BEB3344860BE4235D2D39F8F2",
      "_blank"
    );
  }

  useEffect(() => {
    // From chatgpt but this makes sure that this loads not so laggy on the screen
    if (!paragraphText.current) return;

    let split;

    ScrollTrigger.create({
      trigger: paragraphText.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        split = new SplitText(paragraphText.current, { type: "words" });

        gsap.from(split.words, {
          opacity: 0.05,
          stagger: 0.1,
          duration: 1,
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (split) split.revert();
    };
  }, []);

  useEffect(() => {
    const items = gsap.utils.toArray(".inspo-thumbnails");

    items.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          filter: "grayscale(0%)",
          scale: 1.05,
          duration: 0.5,
          opacity: "100%",
          ease: "power2.out",
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          filter: "grayscale(100%)",
          scale: 1,
          duration: 0.5,
          opacity: "20%",
          ease: "power2.out",
        });
      });

      return () => {
        items.forEach((item) => {
          item.removeEventListener("mouseenter", () => {});
          item.removeEventListener("mouseleave", () => {});
        });
      };
    });
  }, []);

  return (
    <div className="about-section" id="about">
      <div className="center-container">
        <div className="resume-text">
          <p ref={paragraphText} className="text-paragraph">
            Hello, my name is Querubin Pascual! 
            A very hard-working student pursuing a Bachelor's Degree in 
            Information Technology at STI College Malolos. 
            Driven by passion, eagerness and love for creating and designing, 
            it led me to trying new experiences such as being a Barista, 
            Graphic Designer, and pushed myself further with Programming. 
            As of the moment, I'll be continuing my passion for coffee 
            and its art, all while creating projects for experience, joy, 
            and greater future. C, special mentions to these channels where I 
            learnt coffee most from.
          </p>
          <div className="coffee-inspirations">
            <div className="inspirations-wrapper">
              <a href="https://www.youtube.com/@jameshoffmann" target="_blank">
                <img
                  className="inspo-thumbnails"
                  src={james_hoffmann}
                  alt="James Hoffmann"
                />
              </a>
              <a
                href="https://www.youtube.com/@Goldenbrown.coffee"
                target="_blank"
              >
                <img
                  className="inspo-thumbnails"
                  src={golden_brown_coffee}
                  alt="Golden Brown Coffee"
                />
              </a>
              <a href="https://www.youtube.com/@Derothebarista" target="_blank">
                <img
                  className="inspo-thumbnails"
                  src={dero_de_barista}
                  alt="Dero de Barista"
                />
              </a>
              <a href="https://www.youtube.com/@issackxcoffee" target="_blank">
                <img
                  className="inspo-thumbnails"
                  src={issackxcoffee}
                  alt="Isaackxcoffee"
                />
              </a>
              <a
                href="https://www.youtube.com/@ConnorDoesCoffee"
                target="_blank"
              >
                <img
                  className="inspo-thumbnails"
                  src={connor_does_coffee}
                  alt="Connor Does Coffee"
                />
              </a>
              <a
                href="https://www.youtube.com/@EuropeanCoffeeTrip"
                target="_blank"
              >
                <img
                  className="inspo-thumbnails"
                  src={european_coffee_trip}
                  alt="European Coffee Trip"
                />
              </a>
              {/* <a href="https://www.studocu.com/ph/u/68168041?qrv=1"><img className="inspo-thumbnails" src={} alt="NC II Document" /></a> */}
            </div>
          </div>
          <img className="kiss-mark mark-one" src={kiss_mark} alt="kiss-mark" />
          <img
            className="kiss-mark mark-two"
            src={kiss_mark2}
            alt="kiss-mark2"
          />
        </div>
      </div>
      <motion.div
        className="qr-modal"
        transition={{
          ease: "easeOut",
        }}
        whileHover={{
          scale: 1.1,
        }}
        onClick={goToLink}
      >
        <div className="shape-modal">
          <span className="material-icons modal-icons">qr_code_2</span>
          <div className="verify-me">Verify My Identity</div>
        </div>
      </motion.div>
    </div>
  );
}
