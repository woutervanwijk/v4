import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
    <title>Loader Logo</title>
    <g>
      <g id="W" transform="translate(11.000000, 5.000000)">
        {/* <path
          d="M 8.438 19.688 L 5.625 19.688 L 5.625 0 L 0 0 L 0 19.688 L 2.813 19.688 L 2.813 25.313 L 8.438 25.313 L 8.438 19.688 Z M 16.875 25.313 L 11.25 25.313 L 11.25 19.688 L 14.063 19.688 L 14.063 0 L 19.688 0 L 19.688 19.688 L 16.875 19.688 L 16.875 25.313 Z M 11.25 19.688 L 8.438 19.688 L 8.438 5.625 L 11.25 5.625 L 11.25 19.688 Z"
          fill="currentColor"
        /> */}
        <text x="14" y="52" style={{ fontSize: '24px', fontWeight: '800' }} fill="currentColor">
          WvW
        </text>
      </g>
      <path
        stroke="currentColor"
        strokeWidth="4"
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

export default IconLoader;
