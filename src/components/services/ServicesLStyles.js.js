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
background-color: transparent;
position: relative;
text-align: left;
text-indent: 7rem;;
color: orange;
font-style: italic;
// margin-bottom: 1rem;
// margin-top: -6rem;
&::before,
&::after {
  content: "";
  height: 2px;
  width: 130px;
  position: absolute;
  top: 50%;
  background: orange;
}
&::before {
  left: -3rem;
}

&::after {
  right: 1rem;
}
@media (max-width: 1200px) {

}
@media (max-width: 992px) {
  &::before {
    left: -1rem;
  }
  &::after {
    right: 25.5rem;
  }
  display: block;
  text-indent: 9rem;;
}
}
@media (max-width: 800px) {
  &::before {
    left: -1rem;
  }
  &::after {
    right: 20.5rem;
  }
  display: block;
  text-indent: 9rem;;
}
@media (max-width: 700px) {
  &::before {
    left: 4rem;
  }
  &::after {
    right: 6rem;
  }
  display: block;
  text-indent: 14rem;;
}
@media (max-width: 600px) {
  &::before {
    left: 2rem;
  }
  &::after {
    right: 4rem;
  }
  text-indent: 12rem;;
}
@media (max-width: 500px) {
  &::before {
    left: -1rem;
  }
  &::after {
    right: 1rem;
  }
  text-indent: 10rem;;
}
`;

export const SLTextDiv = styled.div`
align-items: center;
background-color: transparent;
@media (max-width: 1200px) {

}
@media (max-width: 992px) {
  margin-left: -1rem;
}
@media (max-width: 800px) {
  margin-left: -1rem;

}
@media (max-width: 700px) {
  margin-left: 1rem;
}
@media (max-width: 600px) {
  margin-left: 1rem;
}
@media screen and (max-width: 600px) {
  margin-left: 1rem;
  // background-color: gray;
  }
@media (max-width: 500px) {
  margin-left: -1rem;
  margin-bottom: -2rem;
  // background-color: blue;
}
`

export const SLText = styled.p`
font-size: 4rem;
color: black;
vertical-align: middle;
font-weight: bold;
`;
