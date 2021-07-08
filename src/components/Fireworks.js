import { Fireworks } from "fireworks-js/dist/react";

const options = {
  speed: 3,
};

const style = {
  // left: 0,
  // top: 0,
  // display: "absolute",
  width: "100vw",
  height: "30vh",
  background: "rgb(12, 12, 58)",
};

export const FireworksSection = () => {
  return (
    <div>
      <Fireworks options={options} style={style} />
      <Fireworks options={options} style={style} />
    </div>
  );
};

export default Fireworks;
