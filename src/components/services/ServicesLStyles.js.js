import styled from 'styled-components';



export const ServiceLeftColumn = styled.div`
float: left;
width: 30%;
margin-left:2rem;
margin-bottom: 5rem;
padding: 0 8px;
box-sizing: border-box;
@media (max-width: 1200px) {

}
@media (max-width: 992px) {
  width: 100%;
  display: block;
  margin-bottom: 1rem;
}
@media (max-width: 800px) {
  width: 100%;
  display: block;
  margin-bottom: -1rem;
  // background-color: orange;
}
@media (max-width: 700px) {
  width: 100%;
  display: block;
  margin-bottom: -1rem;
  // background-color: orange;
}
@media (max-width: 600px) {

}
@media screen and (max-width: 650px) {
    width: 100%;
    display: block;
    margin-bottom: -1rem;
    // background-color: orange;
  }
`

export const SLDiv = styled.div`
// `

export const ServicesHrLines = styled.div`
position: relative;
text-align: left;
margin-left: 7rem;
color: orange;
font-style: italic;
&::before {
  content: " ";
  display: block;
  height: 2px;
  width: 130px;
  position: absolute;
  top: 50%;
  left: -155px;
  background: orange;
}

&::after {
  content: " ";
  height: 2px;
  width: 130px;
  background: orange;
  display: block;
  position: absolute;
  top: 50%;
  right: 0.0px;
}
@media (max-width: 1200px) {
  // background-color: red;
  position: relative;
  text-align: left;
  margin-left: -1.7rem;
  color: orange;
  font-style: italic;
    &::before {
  content: " ";
  height: 2px;
  width: 130px;
  display: block;
  position: absolute;
  top: 50%;
  left: 9px;
}
&::after {
  content: " ";
  height: 2px;
  width: 130px;
  display: block;
  position: absolute;
  top: 50%;
  right: 0;
}
text-indent: 9.2rem;;
}
}
@media (max-width: 992px) {
  // background-color: gray;
  position: relative;
  text-align: left;
  margin-left: -1.7rem;
  color: orange;
  font-style: italic;
    &::before {
  content: " ";
  height: 2px;
  width: 130px;
  background: orange;
  display: block;
  position: absolute;
  top: 50%;
  left: 9px;
}
&::after {
  content: " ";
  height: 2px;
  width: 130px;
  background: orange;
  display: block;
  position: absolute;
  top: 50%;
  right: 25rem;
}
text-indent: 10rem;;
}
@media (max-width: 800px) {
  // background-color: yellow;
  position: relative;
  text-align: left;
  margin-left: -1.7rem;
  color: orange;
  font-style: italic;
    &::before {
  content: " ";
  height: 2px;
  width: 130px;
  background: orange;
  display: block;
  position: absolute;
  top: 50%;
  left: 9px;
}
&::after {
  content: " ";
  height: 2px;
  width: 130px;
  background: orange;
  display: block;
  position: absolute;
  top: 50%;
  right: 17rem;
}
text-indent: 10rem;;
}
@media (max-width: 700px) {
  // background-color:green;
  position: relative;
  text-align: left;
  margin-left: -1.7rem;
  color: orange;
  font-style: italic;
    &::before {
  content: " ";
  height: 2px;
  width: 130px;
  background: orange;
  display: block;
  position: absolute;
  top: 50%;
  left: 9px;
}
&::after {
  content: " ";
  height: 2px;
  width: 130px;
  background: orange;
  display: block;
  position: absolute;
  top: 50%;
  right: 14rem;
}
text-indent: 10rem;;
}
}
@media (max-width: 600px) {
  // background-color: pink;
  position: relative;
  text-align: left;
  margin-left: -5.7rem;
  color: orange;
  font-style: italic;
    &::before {
  content: " ";
  height: 2px;
  width: 130px;
  background: orange;
  display: block;
  position: absolute;
  top: 50%;
  left: 80px;
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
text-indent: 16rem;
}
@media (max-width: 500px) {
    position: relative;
    text-align: left;
    margin-left: -1.7rem;
    color: orange;
    font-style: italic;
      &::before {
    content: " ";
    height: 2px;
    width: 130px;
    background: orange;
    display: block;
    position: absolute;
    top: 50%;
    left: 9px;
  }
  &::after {
    content: " ";
    height: 2px;
    width: 130px;
    background: orange;
    display: block;
    position: absolute;
    top: 50%;
    right: 4rem;
  }
  text-indent: 10rem;;
}
`;

export const SLTextDiv = styled.div`
align-items: center;
background-color: transparent;
// @media (max-width: 1200px) {

// }
// @media (max-width: 992px) {
//   margin-left: -1rem;
// }
// @media (max-width: 800px) {
//   margin-left: -1rem;

// }
// @media (max-width: 700px) {
//   margin-left: 1rem;
// }
// @media (max-width: 600px) {
//   margin-left: 1rem;
// }
// @media screen and (max-width: 600px) {
//   margin-left: 1rem;
//   // background-color: gray;
//   }
// @media (max-width: 500px) {
//   margin-left: -1rem;
//   margin-bottom: -2rem;
//   // background-color: blue;
// }
`

export const SLText = styled.p`
font-size: 4rem;
color: black;
vertical-align: middle;
font-weight: bold;
`;
