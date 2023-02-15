import React from "react";
import { useState } from "react";

const Slider = (props) => {
  const [url, setUrl] = useState("");
  const clickhandler = (e) => {
    setUrl(e.target.currentSrc);
  };

  return (
    <React.Fragment>
      <div className="flex flex-col justify-center p-6 ">
        <div className="w-full flex justify-center mb-6">
          <img src={url} />
        </div>
        <div className="block flex items-end">
          {props.images?.map((img) => {
            return (
              <li key={img} onClick={clickhandler}>
                <img src={img} />
              </li>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Slider;
