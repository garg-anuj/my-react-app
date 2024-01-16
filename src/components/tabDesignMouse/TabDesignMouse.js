// https://assets.justinmind.com/wp-content/uploads/2018/04/tab-design-mouse-click-movement.gif

import { useState } from "react";
import "./tab.css";

const TabDesignMouse = () => {
  const [current, setCurrentBtn] = useState("ONE");

  function handleBtn(btnValue) {
    setCurrentBtn(btnValue);
  }

  return (
    <>
      <div className="mainContainer">
        <div className="btnContainer">
          <button onClick={() => handleBtn("ONE")}>One</button>
          <button onClick={() => handleBtn("TWO")}>Two</button>
          <button onClick={() => handleBtn("THREE")}>Three</button>
          <button onClick={() => handleBtn("FOUR")}>Four</button>
        </div>

        <div className="textContainer">
          <div className="img">Images</div>
          <div className="content">
            <h4>SERVICE {current}</h4>
            <p>
              I've got a small React problem, the answer of which I haven't been
              able to find so far. I have a page with a Textfield and two
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabDesignMouse;
