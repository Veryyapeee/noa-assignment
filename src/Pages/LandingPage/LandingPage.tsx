import React from "react";

import Header from "Templates/Header/Header";
import MainIntro from "Templates/MainIntro/MainIntro";
import ProductPros from "Templates/ProductPros/ProductPros";
import Newsletter from "Templates/Newsletter/Newsletter";
import Footer from "Templates/Footer/Footer";
import SocialIcons from "Molecules/SocialIcons/SocialIcons";

const LandingPage = () => {
  return (
    <>
      <Header />
      <MainIntro />
      <ProductPros />
      <Newsletter />
      <Footer />
      <SocialIcons />
    </>
  );
};

export default LandingPage;
