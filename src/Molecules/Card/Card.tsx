import React from "react";

import ItalicTitle from "Atoms/ItalicTitle/ItalicTitle";
import MainTitle from "Atoms/MainTitle/MainTitle";
import CardText from "Atoms/CardText/CardText";

import styles from "./Card.module.scss";

const Card = () => {
  return (
    <div className={styles.cardWrapper}>
      <ItalicTitle>introducing</ItalicTitle>
      <MainTitle>Smoothie Delight</MainTitle>
      <CardText>
        Are you hitting the gym and have no time to eat breakfast? It's not a
        problem, with out smoothies you can eat fast and healthy breakfast
        without event worry!
      </CardText>
    </div>
  );
};

export default Card;
