import React from "react";

import styles from "./WavesTop.module.scss";

interface Props {
  color: string;
}

const WavesTop: React.FC<Props> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className={styles.svg}
    >
      <path
        fill={color}
        fillOpacity="1"
        d="M0,32L48,69.3C96,107,192,181,288,192C384,203,480,149,576,149.3C672,149,768,203,864,208C960,213,1056,171,1152,144C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  );
};

export default WavesTop;
