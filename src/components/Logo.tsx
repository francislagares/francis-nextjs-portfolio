import React from "react";

const Logo = () => {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Logo</title>
      <g>
        <g id="K" transform="translate(44.000000, 35.000000)">
          <path
            fill="currentColor"
            d="M 3.915 3.24 L 3.915 14.085 L 16.065 14.085 L 16.065 17.235 L 3.915 17.235 L 3.915 31.005 L 0 31.005 L 0 0 L 18.27 0 L 17.82 3.24 L 3.915 3.24 Z"
          />
        </g>
        <path
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
        />
      </g>
    </svg>
  );
}

export default Logo;
