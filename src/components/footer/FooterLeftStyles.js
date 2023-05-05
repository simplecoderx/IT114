import styled from 'styled-components';

export const FooterLeftColumn = styled.div`
background-color: transparent;
  flex-basis: 33%;
  width: 50%;
  text-align: center;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 50px;
  margin-left:-2.6rem;
  
  @media (max-width: 800px) {
    flex-basis: 100%;
    // background-color: pink;
    margin-left: 1rem;
  }
  @media (max-width: 700px) {
    flex-basis: 100%;
    // background-color: gray;
    margin-left: 1rem;
  }
  @media (max-width: 600px) {
    flex-basis: 100%;
    // margin-bottom: 1.5rem;
    // background-color: green;
    margin-left: 1rem;
  }
  @media (max-width: 500px) {
    flex-basis: 100%;
    // margin-bottom: 1.5rem;
    // background-color: yellow;
    margin-left: 1rem;
  }
`;

export const FLDiv = styled.div`
margin-left: 10%;
display: flex;
justify-content: center;
align-items: center;
`

export const FLIconDiv = styled.div`
margin-left: 29%;
display: flex;
align-items: center;
text-align: center;
@media (max-width: 1200px) {

}
@media (max-width: 992px) {

}
@media (max-width: 800px) {
  margin-left: 12rem;
}
@media (max-width: 700px) {
  margin-left: 9rem;
}
@media (max-width: 600px) {
  margin-left: 6rem;
}
@media (max-width: 500px) {
  margin-left: 5rem;
}
`

export const FLImgDiv = styled.div`
// margin-left: -1rem;
`
export const FLImg = styled.img`
// width: 15rem;
margin-left: -4.4rem;
@media (max-width: 1200px) {

}
@media (max-width: 992px) {
  align-items: center; /* vertically centers contents */
}
@media (max-width: 800px) {
  margin-left: 3rem;
}
@media (max-width: 700px) {
  margin-left: -1rem;
}
@media (max-width: 600px) {
  margin-left: -3rem;
}
@media (max-width: 500px) {
  margin-left: -4rem;
}
`

export const FLText = styled.p`
text-align: justify;
@media (max-width: 1200px) {

}
@media (max-width: 992px) {

}
@media (max-width: 800px) {
  margin-left: -1rem;
}
@media (max-width: 700px) {
  margin-left: -1.4rem;
}
@media (max-width: 600px) {
  margin-left: -1.4rem;
}
@media (max-width: 500px) {
  margin-left: -2.4rem;
}
`
export const FLIcons = styled.div`
margin-right: 2rem;
`
