import React from "react";
import ReactDOM from "react-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/flexboxgrid.min.css";
import "./style/index.css";
import "react-alice-carousel/lib/alice-carousel.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalProvider } from "./context/globalContext";

ReactDOM.render(
  <>
    <GlobalProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </GlobalProvider>
  </>,
  document.getElementById("root")
  // document.addEventListener('contextmenu', function (e) {
  //   e.preventDefault();
  // }),
);

reportWebVitals();
