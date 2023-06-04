import React from "react";

export const Svg078 = ({ state }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <style>
        {`
        .sunburst-line {
          stroke: #000;
          stroke-width: 2;
          stroke-linecap: round;
          opacity: 0;
          animation: reveal 10s infinite;
        }
        
        @keyframes reveal {
          0% {
            opacity: 0;
            stroke-dashoffset: 100%;
          }
          100% {
            opacity: 1;
            stroke-dashoffset: 0;
          }
        }
        `}
      </style>
      <circle cx="150" cy="150" r="50" fill="#f9c947" />
      <g transform="translate(150,150)">
        <line className="sunburst-line" x1="0" y1="0" x2="0" y2="-50" />
        <line className="sunburst-line" x1="0" y1="0" x2="50" y2="0" />
        <line className="sunburst-line" x1="0" y1="0" x2="0" y2="50" />
        <line className="sunburst-line" x1="0" y1="0" x2="-50" y2="0" />
        <line className="sunburst-line" x1="0" y1="0" x2="-35" y2="-35" />
      </g>
    </svg>
  );
};
