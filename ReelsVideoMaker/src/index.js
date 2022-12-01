import React from "react";
import ReactDOM from "react-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/flexboxgrid.min.css";
import "./style/index.css";
import "react-alice-carousel/lib/alice-carousel.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalProvider } from "./context/globalContext";

ReactDOM.render(
  <>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </>,
  document.getElementById("root")
  // document.addEventListener('contextmenu', function (e) {
  //   e.preventDefault();
  // }),
);

reportWebVitals();
