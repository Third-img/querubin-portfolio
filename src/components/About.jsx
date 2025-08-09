import { useEffect, useRef, useState } from "react";
//#region Images
import resume_image from "../assets/Resume2.png";
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
        <div className="resume-image">
          <motion.img
            src={resume_image}
            alt="resume-img"
            whileHover={{
              scale: 1.07,
              rotate: "-5deg",
            }}
            whileTap={{
              scale: 1,
              rotate: "1deg",
            }}
            onClick={() => setOpen(true)}
          />
        </div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[
            {
              src: resume_image,
              alt: "resume_image",
            },
          ]}
        />
        <div className="resume-text">
          <p ref={paragraphText} className="text-paragraph">
            Hello, my name is Querubin Pascual! I’m a hard-working student,
            pursuing a Bachelor’s Degree in Information Technology at STI
            College Malolos. Driven by passion and love for creativity, I aspire
            to be a Barista, because of the many things you could learn about
            it; there's latte art, the origin of the coffee beans, brewing
            methods, and other challenging yet fun activities that I may come
            across while learning. I would love to delve in this art all while
            creating as much passion projects for experience, joy, and my
            greater future. I can’t wait to be a part of the team and make a
            positive impact. Special mentions to these channels that I have
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
