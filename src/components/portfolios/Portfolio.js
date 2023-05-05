import React from "react";
import {
  PBorderedText,
  PDiv,
  PHrLines,
  PImg,
  PImgDiv,
  PNonBorderedText,
  PTextDiv,
  PWrapper,
} from "./PortfolioStyles";
import PortfolioImages from "./PortfolioImages";
import "./Portfolio.css";
import partner1 from "./../../components/images/1.png";
import partner2 from "./../../components/images/2.png";
import partner3 from "./../../components/images/3.png";
import partner4 from "./../../components/images/4.png";
import partner5 from "./../../components/images/5.png";

const Portfolio = () => {
  return (
    <PWrapper id="portfolio">
      <PDiv>
        <PHrLines>Portfolio</PHrLines>
        <PTextDiv>
          <PNonBorderedText>Awesome</PNonBorderedText>
          <PBorderedText className="bordered-text">Portfolio</PBorderedText>
        </PTextDiv>
        <PortfolioImages />
        <PImgDiv>
          {/* <PImgDiv>
              <PImg src='/img/partners.png' alt="Hinlo Services" />
            </PImgDiv> */}
          <div className="container partners-div">
            <div class="row">
              <div class="col">
                <img
                  className="partner-image mx-auto d-block"
                  src={partner1}
                  alt="Testimonial"
                />
              </div>
              <div class="col">
                <img
                  className="partner-image mx-auto d-block"
                  src={partner2}
                  alt="Testimonial"
                />
              </div>
              <div class="col">
                <img
                  className="partner-image mx-auto d-block"
                  src={partner3}
                  alt="Testimonial"
                />
              </div>
              <div class="col">
                <img
                  className="partner-image mx-auto d-block"
                  src={partner4}
                  alt="Testimonial"
                />
              </div>
              <div class="col">
                <img
                  className="partner-image mx-auto d-block"
                  src={partner5}
                  alt="Testimonial"
                />
              </div>
            </div>
          </div>
        </PImgDiv>
      </PDiv>
    </PWrapper>
  );
};

export default Portfolio;
