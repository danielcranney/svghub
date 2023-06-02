const SquiggleLink = () => {
  // Convert SVG component to data URL
  const svgDataUrl = `data:image/svg+xml;base64,${window.btoa(
    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events" viewBox="0 0 10 18"><style type="text/css">.squiggle{animation:shift .5s linear infinite;}@keyframes shift{from{transform:translateX(-10px);}to{transform:translateX(0);}}</style><path fill="none" stroke="#232323" opacity="0.2" stroke-width="1" class="squiggle" d="M0,17.5 c 2.5,0,2.5,-1.5,5,-1.5 s 2.5,1.5,5,1.5 c 2.5,0,2.5,-1.5,5,-1.5 s 2.5,1.5,5,1.5"/></svg>`
  )}`;

  return (
    <div
      className="w-full bg-yellow-400 bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${svgDataUrl})`,
      }}
    >
      kjkj
    </div>
  );
};

export default SquiggleLink;
