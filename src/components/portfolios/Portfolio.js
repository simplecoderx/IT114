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
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./Portfolio.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [category, setCategory] = useState("All");

  const openLightbox = (index) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const filterItems = (items, category) => {
    if (category === "All") {
      return items;
    }
    return items.filter((item) => item.category === category);
  };

  const filteredItems = filterItems(itemData, category);
  return (
    <PWrapper id="portfolio">
      <PDiv>
        <PHrLines>Portfolio</PHrLines>
        <PTextDiv>
          <PNonBorderedText>Awesome</PNonBorderedText>
          <PBorderedText className="bordered-text">Portfolio</PBorderedText>
        </PTextDiv>
        <Container fluid>
          <Row style={{ marginBottom: "-8rem", marginTop: "1px" }}>
            <Col xs={12}>
              <div className="d-flex mb-3 m-5">
                <Button
                  className="portfolio-btn"
                  variant={category === "All" ? "btn" : "btn btn-link"}
                  onClick={() => handleCategoryChange("All")}
                >
                  All
                </Button>
                <Button
                  className="portfolio-btn"
                  variant={
                    category === "Sanitizing" ? "btn" : "btn btn-link"
                  }
                  onClick={() => handleCategoryChange("Sanitizing")}
                >
                  Sanitizing
                </Button>
                <Button
                  className="portfolio-btn"
                  variant={
                    category === "Cleaning" ? "btn" : "btn btn-link"
                  }
                  onClick={() => handleCategoryChange("Cleaning")}
                >
                  Cleaning
                </Button>
                <Button
                  className="portfolio-btn"
                  variant={
                    category === "Residential" ? "btn" : "btn btn-link"
                  }
                  onClick={() => handleCategoryChange("Residential")}
                >
                  Residential
                </Button>
              </div>
              <Box
                sx={{
                  width: "100%",
                  height: 450,
                  marginLeft: "15px",
                  overflowY: "scroll",
                }}
              >
                <ImageList variant="masonry" cols={3} gap={8}>
                  {filteredItems.map((item, index) => (
                    <ImageListItem key={item.img}>
                      <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        onClick={() => openLightbox(index)}
                        style={{ cursor: "pointer" }}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
                {isOpen && (
                  <Lightbox
                    mainSrc={filteredItems[photoIndex].img}
                    nextSrc={
                      filteredItems[(photoIndex + 1) % filteredItems.length].img
                    }
                    prevSrc={
                      filteredItems[
                        (photoIndex + filteredItems.length - 1) %
                          filteredItems.length
                      ].img
                    }
                    onCloseRequest={closeLightbox}
                    onMovePrevRequest={() =>
                      setPhotoIndex(
                        (photoIndex + filteredItems.length - 1) %
                          filteredItems.length
                      )
                    }
                    onMoveNextRequest={() =>
                      setPhotoIndex((photoIndex + 1) % filteredItems.length)
                    }
                  />
                )}
              </Box>
            </Col>
          </Row>
        </Container>
        <PImgDiv>
          <div className="container partners-div mt-5">
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
const itemData = [
  {
    img: "/img/p1.png",
    title: "Sample",
    category: "Sanitizing",
  },
  {
    img: "/img/p2.png",
    title: "S2",
    category: "Cleaning",
  },
  {
    img: "/img/p3.png",
    title: "S4",
    category: "Residential",
  },
  {
    img: "/img/p4.png",
    title: "S5",
    category: "Sanitizing",
  },
  {
    img: "/img/p5.png",
    title: "S6",
    category: "Cleaning",
  },
  {
    img: "/img/p6.png",
    title: "S7",
    category: "Residential",
  },
  {
    img: "/img/p7.png",
    title: "S8",
    category: "Sanitizing",
  },
  {
    img: "/img/p8.png",
    title: "S9",
    category: "Cleaning",
  },
  {
    img: "/img/p9.png",
    title: "S10",
    category: "Residential",
  },
  {
    img: "/img/p10.png",
    title: "S11",
    category: "Sanitizing",
  },
  {
    img: "/img/p11.png",
    title: "S12",
    category: "Cleaning",
  },
  {
    img: "/img/p12.png",
    title: "S13",
    category: "Residential",
  },
  {
    img: "/img/p13.png",
    title: "S14",
    category: "Sanitizing",
  },
  {
    img: "/img/p14.png",
    title: "S15",
    category: "Cleaning",
  },
  {
    img: "/img/p15.png",
    title: "S16",
    category: "Residential",
  },
  {
    img: "/img/p16.png",
    title: "S17",
    category: "Sanitizing",
  },
  {
    img: "/img/p17.png",
    title: "S18",
    category: "Cleaning",
  },
  {
    img: "/img/p18.png",
    title: "S19",
    category: "Residential",
  },
];

export default Portfolio;
