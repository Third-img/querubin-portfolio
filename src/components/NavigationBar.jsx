import { iframe } from "motion/react-client";
import "../styles/navbar.css";

export default function NavigationBar() {

  function linkOne(){
    const aboutLink = document.getElementById("about");
    if(aboutLink){
      aboutLink.scrollIntoView({behavior: "smooth"});
    }
  }

  function linkTwo(){
    const homeLink = document.getElementById("hero");
    if(homeLink){
      homeLink.scrollIntoView({behavior: "smooth"});
    }
  }

  return (
    <div className="navbar-container">
      <span className="material-icons home-icon icons" onClick={linkTwo}>home</span>
      <div className="thirdy-icon icons" onClick={linkTwo}>3DY</div>
      <div className="icons" onClick={linkOne}>About</div>
    </div>
  );
}
