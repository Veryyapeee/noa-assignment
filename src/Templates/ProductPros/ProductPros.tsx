import React from "react";

import CardPros from "Organism/CardPros/CardPros";

import SmoothieBg from "Assets/smoothieBg.png";
import Heart from "Assets/heart.png";
import Muscle from "Assets/muscle.png";
import Star from "Assets/star.png";

import styles from "./ProductPros.module.scss";

const ProductPros = () => {
  return (
    <section className={styles.prosCon} id="product">
      <div className={styles.cardCon}>
        <CardPros title="Healthy" image={Heart} altForImage="Heart icon">
          Our smoothies are made of the best quality vegetables and fruits you
          can find!
        </CardPros>
        <CardPros title="Unique" image={Star} altForImage="Star icon">
          Every smoothie is an unique experience!
        </CardPros>
        <CardPros title="Stay strong!" image={Muscle} altForImage="Muscle icon">
          Loose weight, add muscles, stay strong!
        </CardPros>
      </div>
      <img src={SmoothieBg} alt="Smoothie" className={styles.smoothieImg} />
    </section>
  );
};

export default ProductPros;
