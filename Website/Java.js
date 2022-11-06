import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./js.components.jsx/navbar.jsx";

ReactDOM.render(
    <div>
        <h1>js test</h1>
        <Navbar/>
    </div>
, document.querySelector("#app"));

/*const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  const element = <h1>Hello, world</h1>;
root.render(element);*/