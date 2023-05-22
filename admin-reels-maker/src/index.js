import React from "react";
import ReactDOM from "react-dom";
import "./style/flexboxgrid.min.css";
import "./style/index.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
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
