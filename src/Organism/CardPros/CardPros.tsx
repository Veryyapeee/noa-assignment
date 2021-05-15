import React from "react";

import Card from "Molecules/Card/Card";
import MainTitle from "Atoms/MainTitle/MainTitle";
import CardText from "Atoms/CardText/CardText";
import TitleIcon from "Atoms/TitleIcon/TitleIcon";

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
        <TitleIcon src={image} alt={altForImage} />
      </MainTitle>
      <CardText>{children}</CardText>
    </Card>
  );
};

export default CardPros;
