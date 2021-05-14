import React from "react";

import Card from "Molecules/Card/Card";
import WavesBottom from "Atoms/WavesBottom/WavesBottom";

import Fruits from "Assets/fruits.jpg";

import styles from "./MainIntro.module.scss";
import MainTitle from "Atoms/MainTitle/MainTitle";
import ItalicTitle from "Atoms/ItalicTitle/ItalicTitle";
import CardText from "Atoms/CardText/CardText";

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
          <Card>
            <ItalicTitle>introducing</ItalicTitle>
            <MainTitle>Smoothie Delight</MainTitle>
            <CardText>
              Are you hitting the gym and have no time to eat breakfast? It's
              not a problem, with out smoothies you can eat fast and healthy
              breakfast without event worry!
            </CardText>{" "}
          </Card>
        </div>
        <WavesBottom color="#fff" />
      </main>
    </>
  );
};

export default MainIntro;
