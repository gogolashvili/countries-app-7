import moon from "../images/moon.png";
import { Outlet } from "react-router-dom";

export default function Headeri(props) {
  function toggleDarkMode() {
    props.setIsDarkMode(!props.isDarkMode);
  }

  const modeDivStyle = {
    backgroundColor: props.isDarkMode ? "hsl(209, 23%, 22%)" : "white",
    color: props.isDarkMode ? "white" : "black",
  };

  return (
    <>
      <header
        style={{ backgroundColor: props.isDarkMode ? "#2B3844" : "white" }}
      >
        <div className="headerDiv">
          <h1
            style={{ color: props.isDarkMode ? "white" : "black" }}
            className="title"
          >
            Where in the world?
          </h1>
          <div
            className="modeDiv"
            style={modeDivStyle}
            onClick={toggleDarkMode}
          >
            <img className="moonImg" src={moon} alt="moon" />
            <p
              style={{ color: props.isDarkMode ? "white" : "black" }}
              className="modeText"
            >
              Dark Mode
            </p>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
