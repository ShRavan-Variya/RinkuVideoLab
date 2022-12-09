import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.51663 2.36664L3.02496 5.86664C2.27496 6.44997 1.66663 7.69164 1.66663 8.63331V14.8083C1.66663 16.7416 3.24163 18.325 5.17496 18.325H14.825C16.7583 18.325 18.3333 16.7416 18.3333 14.8166V8.74997C18.3333 7.74164 17.6583 6.44997 16.8333 5.87497L11.6833 2.26664C10.5166 1.44997 8.64163 1.49164 7.51663 2.36664Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 14.9916V12.4916"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default SvgComponent;
