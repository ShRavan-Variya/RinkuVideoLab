import * as React from "react";

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512" {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M194.994,52.5c-88.083,0-159.5,71.411-159.5,159.5
        c0,88.09,159.5,265.833,159.5,265.833S354.5,300.091,354.5,212C354.5,123.91,283.083,52.5,194.994,52.5z M194.994,278.455
        c-44.042,0-79.75-35.705-79.75-79.747c0-44.048,35.708-79.75,79.75-79.75c44.047,0,79.75,35.702,79.75,79.75
        C274.744,242.75,239.041,278.455,194.994,278.455z"/>
    </svg>
  )
}

export default SvgComponent;
