import React from "react";

import styles from "./WavesBottom.module.scss";

interface Props {
  color: string;
}

const Waves: React.FC<Props> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 250"
      className={styles.svg}
    >
      <path
        fill={color}
        fillOpacity="1"
        d="M0,160L48,176C96,192,192,224,288,202.7C384,181,480,107,576,112C672,117,768,203,864,218.7C960,235,1056,181,1152,144C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  );
};

export default Waves;
