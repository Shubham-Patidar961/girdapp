import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";
const Applayout = () => {
  return (
    <>
      <Main />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
