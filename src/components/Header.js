import moon from "../images/moon.png";
import { Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <div className="headerDiv">
          <h1 className="title">Where in the world?</h1>
          <div className="modeDiv">
            <img className="moonImg" src={moon} alt="moon" />
            <p className="modeText">Dark Mode</p>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
