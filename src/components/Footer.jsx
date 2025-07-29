import { useEffect, useState } from "react";
import "../styles/footerpage.css";

function DateNow() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div>
      <div className="current-clock">{time.toLocaleTimeString()}</div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="footer-section">
      <div className="menu-section">
        <div className="footer-headers">Menu</div>
        <hr />
        <ul className="links">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
      <div className="socials-section">
        <div className="footer-headers">Socials</div>
        <hr />
        <ul className="links">
          <li>
            <a href="https://github.com/Third-img" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/tequerinyo" target="_blank">
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <div className="email-section">
        <span className="material-icons email-icon">email</span>
        <div className="email-address">pascualquerubin06@gmail.com</div>
      </div>
      <div className="time-section">
        <DateNow/>
      </div>
    </div>
  );
}
