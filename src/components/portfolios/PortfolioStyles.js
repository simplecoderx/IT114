import styled from "styled-components";

export const PWrapper = styled.div`
  margin-top: -4rem;
  // background-color: #4287f5;
  // color: #fff;
  // @media (max-width: 1200px) {
  //   background-color: violet;
  // }
  // @media (max-width: 992px) {
  //   background-color: blue;
  // }
  // @media (max-width: 800px) {
  //   background-color: gray;
  // }
  // @media (max-width: 700px) {
  //   background-color: yellow;
  // }
  // @media (max-width: 600px) {
  //   background-color: green;
  // }
  // @media (max-width: 500px) {
  //   background-color: purple;
  // }
`;

export const PDiv = styled.div``;

export const PHrLines = styled.div`
  position: relative;
  text-align: left;
  margin-left: 10rem;
  color: orange;
  font-style: italic;
  text-indent: 4.5rem;
  &::before {
    content: " ";
    display: block;
    height: 2px;
    width: 130px;
    position: absolute;
    top: 50%;
    left: -83px;
    background: orange;
  }

  &::after {
    content: " ";
    height: 2px;
    width: 150px;
    background: orange;
    display: block;
    position: absolute;
    top: 50%;
    right: 55rem;
  }
  @media (max-width: 1200px) {
    // background-color: violet;
    text-indent: 2rem;
    &::before {
      left: -123px;
    }
    &::after {
      content: " ";
      height: 2px;
      width: 130px;
      background: orange;
      display: block;
      position: absolute;
      top: 50%;
      right: 36rem;
    }
  }
  @media (max-width: 992px) {
    // background-color: blue;
    text-indent: 2rem;
    &::before {
      left: -123px;
    }
    &::after {
      content: " ";
      height: 2px;
      width: 130px;
      background: orange;
      display: block;
      position: absolute;
      top: 50%;
      right: 27rem;
    }
  }
  @media (max-width: 800px) {
    // background-color: gray;
    text-indent: 2rem;
    &::before {
      left: -123px;
    }
    &::after {
      content: " ";
      height: 2px;
      width: 130px;
      background: orange;
      display: block;
      position: absolute;
      top: 50%;
      right: 22rem;
    }
  }
  @media (max-width: 700px) {
    // background-color: yellow;
    text-indent: 2rem;
    &::before {
      left: -123px;
    }
    &::after {
      content: " ";
      height: 2px;
      width: 130px;
      background: orange;
      display: block;
      position: absolute;
      top: 50%;
      right: 11.5rem;
    }
  }
  @media (max-width: 600px) {
    text-indent: 1.3rem;
    &::before {
      left: -132px;
    }
    &::after {
      content: " ";
      height: 2px;
      width: 130px;
      background: orange;
      display: block;
      position: absolute;
      top: 50%;
      right: 9rem;
    }
  }
  @media (max-width: 500px) {
    text-indent: 1.3rem;
    &::before {
      left: -132px;
    }
    &::after {
      content: " ";
      height: 2px;
      width: 130px;
      background: orange;
      display: block;
      position: absolute;
      top: 50%;
      right: 5.5rem;
    }
  }
`;

export const PBorderedText = styled.p`
  font-size: 5rem;
  margin-top: 2rem;
  margin-bottom: 0rem;
  color: white;
  text-shadow:
  -1px -1px 0 #000,
  1px -1px 0 #000,
  -1px 1px 0 #000,
  1px 1px 0 #000;

  @supports((text-stroke: 2px black) or (-webkit-text-stroke: 2px black)) {
    .bordered-text {
        color: transparent;
        -webkit-text-stroke: 2px black;
        text-stroke: 2px black;
        text-shadow: none;
    }

    @media (max-width: 1200px) {
      margin-left: 1rem;
    }
    @media (max-width: 992px) {
      margin-left: 1rem;
    }
    @media (max-width: 800px) {
      margin-left: -1rem;
    }
    @media (max-width: 700px) {
      margin-left: -1rem;
      margin-top: -1rem;
      margin-bottom: -1rem;
    }
    @media (max-width: 600px) {
      margin-left: -1rem;
      margin-top: -1rem;
      margin-bottom: -1rem;
    }
    @media (max-width: 500px) {
    margin-left: -1rem;
    margin-top: -1rem;
    margin-bottom: -1rem;
    }
`;

export const PNonBorderedText = styled.div`
  margin-right: 2rem;
  margin-top: 2rem;
  margin-bottom: 0rem;
  font-size: 5rem;
  font-weight: bold;
  color: black;
  display: inline-block;
  vertical-align: middle;
  @media (max-width: 1200px) {
    margin-left: -1rem;
  }
  @media (max-width: 992px) {
    margin-left: -1rem;
  }
  @media (max-width: 800px) {
    margin-left: -1rem;
  }
  @media (max-width: 700px) {
    margin-left: -1rem;
  }
  @media (max-width: 600px) {
    margin-left: -1rem;
  }
  @media (max-width: 500px) {
    margin-left: -1rem;
  }
`;

export const PTextDiv = styled.div`
  display: flex;
  align-items: left;
  margin-left: 3rem;
  margin-top: -2rem;
  @media (max-width: 700px) {
    display: block;
  }
`;

export const PText = styled.p``;
export const Link = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const PImgDiv = styled.div`
  margin-top: 2rem;
  heigth: 1rem;
  // background-color: #99c2f2;
  background-color: white;
  margin-bottom: -30rem;
`;
export const PImg = styled.img`
  align-item: center;
  background-color: #99c2f2;
  width: 50%;
`;
