import React from "react";

import Header from "Templates/Header/Header";
import MainIntro from "Templates/MainIntro/MainIntro";
import ProductPros from "Templates/ProductPros/ProductPros";
import Newsletter from "Templates/Newsletter/Newsletter";

const LandingPage = () => {
  return (
    <>
      <Header />
      <MainIntro />
      <ProductPros />
      <Newsletter />
    </>
  );
};

export default LandingPage;
