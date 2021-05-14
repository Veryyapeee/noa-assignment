import React from "react";

import Card from "Molecules/Card/Card";
import MainTitle from "Atoms/MainTitle/MainTitle";
import CardText from "Atoms/CardText/CardText";

import styles from "./CardPros.module.scss";
interface Props {
  children: string | string[];
  title: string;
  image: string;
  altForImage: string;
}

const CardPros: React.FC<Props> = ({ children, title, image, altForImage }) => {
  return (
    <Card>
      <MainTitle>
        {title}
        <img src={image} alt={altForImage} className={styles.icon} />
      </MainTitle>
      <CardText>{children}</CardText>
    </Card>
  );
};

export default CardPros;
