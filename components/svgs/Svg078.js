import React from "react";

export const Svg078 = ({ state }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <style>
        {`
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .rotate-animation {
    animation: rotate 3s infinite linear;
    transform-origin: 50% 50%;
  }
   .rotate-animation-center {
    animation: rotate 3s infinite linear;
    transform-origin: 50% 50%;
  }
  `}
      </style>
      <g className="rotate-animation-center">
        <path
          fill={state.brand}
          d="M175.67 149.86c.44-2.21-.23-4.63-2.66-6.18-4.43-2.82-10.84-5.56-16.69-5.44-4.3-.91-8.63-.8-12.25 1.14-8.11 4.33-10.02 14.22-7.79 22.47 1.06 3.9 2.86 9.14 5.72 12.12 3.45 3.6 9.31 4.02 14.03 4.03 7.8.03 13.74-3.64 16.57-9.97a.21.21 0 00.06-.04c6.97-4.81 6.93-12.29 3.01-18.14z"
        ></path>
        <path
          fill={state.dark}
          d="M174.26 162.22c.27-.25.51-.58.7-1 3.9-8.78.3-19.12-7.87-24.11-8.53-5.21-20.79-4.23-28.91 1.38-9.11 6.29-7.77 16.89-2.76 25.42 2.65 4.52 5.95 9.16 10.82 11.44 4.4 2.05 9.6 2.12 14.19.65 6.33-2.04 12.17-7.57 13.83-13.77zm-21.01 8.59c-5.25-.28-8.54-3.84-11.24-8-2.14-3.3-4.25-7.04-4.52-11.05-.66-9.66 12.71-12.81 20.17-11.61 4.94.79 9.86 4.3 11.94 8.88-2.56-.67-5.32 2.72-3.05 5.15 7.55 8.08-5.8 17.03-13.3 16.63z"
        ></path>
      </g>
      <g className="rotate-animation-center">
        <path
          fill={state.brand}
          d="M174.01 95.01c2.33-2.26-.14-5.58-2.69-5.23v-.08c-.11-3.17-2.31-5.11-4.81-5.69-1.33-1.07-3.09-1.61-5.1-1.2-6.22 1.25-8.03 9.63-2.88 13.31 2.26 1.61 5.03 1.85 7.42 1.06 2.81.57 5.89-.06 8.05-2.15zM214.91 138.56c.01-.08.03-.15.05-.23.47-3.21-.9-5.94-3.06-8.04-.62-1.34-1.45-2.58-2.43-3.69a13.1 13.1 0 00-.35-.77c-1.89-3.81-5.45-6.34-9.76-6.3-1.7.01-3.43 1.24-3.81 2.94-.16.72-.26 1.45-.33 2.18-.05.19-.08.39-.11.58-.04.36-.07.74-.09 1.12-2.11 1-3.49 3-3.27 6.44.4 6.28 6.96 10.04 13.24 11.42.62.2 1.26.35 1.93.43.33.04.65.05.97.05 1.32.14 2.58.17 3.7.08 3.41-.26 4.52-3.97 3.31-6.21zM197.17 184.92c-.2-.15-.41-.25-.63-.32-1.95-6.06-11.46-6.56-13.18.44a7.92 7.92 0 00.03 3.81c-.59 1.85-.31 3.9 1.28 5.52 2.82 2.87 8.78 3.2 12.11 1.14 3.99-2.48 4.02-7.88.39-10.59zM148.85 214.8c-.15-.67-.34-1.32-.56-1.96 2.15-.42 3.8-3.22 1.77-5.21-2.45-2.41-5.65-4.88-9.26-4.88-.37 0-.73.03-1.09.09-.64-.33-1.3-.63-1.98-.89-2.89-1.08-4.91-.79-6.9 1.68-1.73 2.15-2.13 4.74-1.65 7.4.46 2.52 3.09 2.76 4.73 1.58.28 1.07.79 2.09 1.54 2.98 2.76 3.3 7.21 3.95 11.2 3 1.67-.4 2.57-2.17 2.21-3.78zM100.01 160.39c.34-.59.51-1.31.38-2.13-.06-.39-.14-.77-.23-1.16-.08-.89-.31-1.78-.75-2.63-.05-.09-.11-.18-.16-.27-1.3-3.15-3.56-5.89-6.88-7.01-3.81-1.28-8.6 0-10.84 3.48-4.77 7.43 6.13 17.78 13.62 15.76 2.86-.77 4.55-3.3 4.86-6.05zM130.58 112.8c.11-.02.22-.02.33-.04 1.6-.26 2.67-2.3 2.21-3.78-.78-2.51-2.78-5.79-5.34-8.19-1.88-4.73-6.27-7.81-11.48-7.89-1.26-.02-2.78.99-2.99 2.31-.59 3.71.25 7.27 2.04 10.22.17.33.37.65.59.98-.13.24-.25.49-.36.76-3.61 8.89 7.06 14.6 14.14 10.17 1.79-1.12 1.77-3.16.85-4.52zm-9.41-1.75c1.19.72 2.38 1.28 3.44 1.65-1.53.27-3.14-.05-3.44-1.65z"
        ></path>
        <path
          fill={state.dark}
          d="M213.32 150.77c4.26-6.59 7.92-14.97 5.6-22.94-1.91-6.56-8.02-12.46-15.18-12.19-16.43.64-18.52 27.04-5.45 33.92 2.96 1.56 6.44 1.8 9.57.92 1.01 1.8 3.98 2.57 5.46.28zm-15.33-9.69c-3.23-4.98-2.9-12.95 1.48-17.19 4.72-4.57 11.17-.55 13.2 4.66 1.31 3.38.93 6.96-.23 10.38-1.02.15-1.96.81-2.34 2.1-1.73 5.87-9.49 4.08-12.11.05zM200.78 194.95c.44-.88.44-1.74.16-2.49 2.1-3.86 1.9-9.1-1.29-12.91-5.36-6.42-15.51-6.21-21.16-.26-5.55 5.85-4.48 15.68 1.8 20.58 6.59 5.13 16.83 2.48 20.48-4.92zm-18.9-9.94c1.94-3.49 6.85-5.14 10.49-3.47 2.15.99 4.15 3.34 3.99 5.83-.16 2.36-2.12 4.13-4.44 4.04-2.87-.11-3.75 3.07-2.53 4.91-1.54.26-3.15.03-4.62-.83-3.43-2.01-4.83-7.01-2.9-10.48zM149.56 216.59c5.59-5.81 6.35-15.81.38-21.72-5.65-5.59-15.79-5.68-21.16.33-5.13 5.74-4.53 15.63 1.62 20.4 4.34 3.37 10.33 3.43 14.95.94 1.08 1.1 2.84 1.48 4.22.05zm-15.37-5.82c-3.5-2.68-3.57-8.64-.58-11.7 3.17-3.24 9.17-2.86 12.17.41 1.87 2.04 2.46 4.83 2.02 7.47-.96-.04-1.94.38-2.58 1.47-2.14 3.62-7.56 5.02-11.03 2.35zM98.75 169.94c4.51-2.94 7.43-7.83 8.01-13.05.36-.9.67-1.79.94-2.65.48-1.58-.25-2.79-1.35-3.42-.12-.47-.26-.94-.43-1.4-1.42-4-4.55-7.75-8.9-8.52-4.53-.81-8.54 2.07-11.09 5.57-4.93 6.77-5.06 18.44 4.1 21.79 1.69.62 3.27.8 4.73.64.76 1.33 2.34 2.11 3.99 1.03zm-5.82-7.23c-5.85-1.01-4.58-8.77-2.26-12.25 1.39-2.08 3.74-4.44 6.4-3.06 2.01 1.05 3.14 3.72 3.48 5.84.12.78.16 1.57.12 2.35-1.45 3.62-3.92 7.77-7.74 7.11zM141.42 104.87c.6-3.24-3.43-5.01-5.2-3.23-2.37-5.86-8.33-10.89-14.84-9.78-7.94 1.36-9.74 12.66-9.43 19.26.35 7.56 5.63 15.05 13.92 14.08 10.26-1.2 13.94-11.58 15.56-20.34zm-22.41-1.27c.74-3.17 1.76-6.64 5.78-5.37 2.53.8 4.51 2.97 5.55 5.36 2.58 5.89-.93 11.95-5.59 15.54-7.59.57-6.87-10.69-5.74-15.52zM173.68 105.45c.15-.12.28-.25.42-.37 4.73-2.79 7.9-8.31 7.7-13.95-.09-2.5-2.58-3.49-4.37-2.89-1.04-2.28-2.7-4.28-5.03-5.66-6.54-3.9-15.75-.03-18.19 7.02-2.72 7.88 3.75 16.35 11.7 17.26 2.03.23 3.97-.03 5.77-.66.67 0 1.36-.23 2-.75zm-6.01-4.67c-4.3.19-8.94-4.33-7.73-8.77.92-3.38 5.43-5.9 8.75-4.43 5.07 2.25 4.71 9.04 1.52 12.63-.78.33-1.63.54-2.54.58z"
        ></path>
      </g>
    </svg>
  );
};
