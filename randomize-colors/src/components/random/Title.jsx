import React from "react";

function Title({ classes, text }) {
  return (
    <h1 className={!classes ? "title text-center" : classes && "title"}>
      {!text ? "title" : text}
    </h1>
  );
}

export default Title;
