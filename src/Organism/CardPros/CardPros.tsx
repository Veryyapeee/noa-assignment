import React from "react";

import Card from "Molecules/Card/Card";
import MainTitle from "Atoms/MainTitle/MainTitle";
import CardText from "Atoms/CardText/CardText";

interface Props {
  children: string | string[];
  title: string;
}

const CardPros: React.FC<Props> = ({ children, title }) => {
  return (
    <Card>
      <MainTitle>{title}</MainTitle>
      <CardText>{children}</CardText>
    </Card>
  );
};

export default CardPros;
