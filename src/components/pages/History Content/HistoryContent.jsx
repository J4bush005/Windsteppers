import React from "react";
import HistorySlider from "./HistorySlider";

function HistoryContent() {
  return (
    <>
    <div id="purp-back" className="container">
      <div>
        <h1 id="champions" className="display-1 justify-content-center d-flex">
          Our History
        </h1>
        <div className="row d-flex justify-content-center mb-5">
          <div id="words" className="col-12 d-flex justify-content-center fs-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
      <HistorySlider/>
      <div className="row d-flex justify-contnet-evenly mt-5">
        <div className="col-lg-6">
          <h1 id="championss" className="display-1">
            Ecclesiastes 9:11
          </h1>
          <div id="words" className="fs-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className="col-lg-6">
          <h1 id="championss" className="display-1">
            No Excuses
          </h1>
          <div id="words" className=" fs-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
   
   </>
  );
}

export default HistoryContent;
