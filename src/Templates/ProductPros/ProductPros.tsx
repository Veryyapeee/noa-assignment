import React from "react";

import CardPros from "Organism/CardPros/CardPros";

import SmoothieBg from "Assets/smoothieBg.png";

import styles from "./ProductPros.module.scss";

const ProductPros = () => {
  return (
    <section className={styles.prosCon} id="product">
      <div className={styles.cardCon}>
        <CardPros title="Healthy & Delicious">
          Our smoothies are made of the best quality vegetables and fruits you
          can find!
        </CardPros>
        <CardPros title="Unique">
          Every smoothie is an unique experience!
        </CardPros>
        <CardPros title="Stay strong!">
          Loose weight, add muscles, stay strong!
        </CardPros>
      </div>
      <img src={SmoothieBg} alt="Smoothie" className={styles.smoothieImg} />
    </section>
  );
};

export default ProductPros;
