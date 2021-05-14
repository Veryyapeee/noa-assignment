import React from "react";

import Card from "Molecules/Card/Card";
import WavesBottom from "Atoms/WavesBottom/WavesBottom";

import Fruits from "Assets/fruits.jpg";

import styles from "./MainIntro.module.scss";

const MainIntro = () => {
  return (
    <>
      <main
        style={{
          backgroundImage: `url("${Fruits}")`,
        }}
        className={styles.mainWrapper}
      >
        <div className={styles.cardCon}>
          <Card />
        </div>
        <WavesBottom color="#fff" />
      </main>
    </>
  );
};

export default MainIntro;
