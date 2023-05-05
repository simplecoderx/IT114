import styled from 'styled-components';

export const AboutUsLeftColumn = styled.div`
  flex-basis: 40%;
  text-align: center;
  margin-left: 20px;

  @media (max-width: 768px) {
    flex-basis: 50%;
  }
  
  @media (max-width: 576px) {
    flex-basis: 50%;
    margin-bottom: 1.5rem;
  }
`;

export const LAUDiv = styled.div`
// margin-left: 20%;
@media (max-width: 500px) {
  display: flex;
  justify-content: center;
  align-items: center;
}
`

export const LAUImgDiv = styled.div`
`
export const LAUImg = styled.img`
align-item:center;
width:150%;
@media (max-width: 1200px){
  width: 200%;
  height: auto;
  margin-left: 12rem;
}
@media (max-width: 992px){
  width: 200%;
  height: auto;
  margin-left: 0;
}
@media (max-width: 500px){
  width: 200%;
  height: auto;
  margin-left: 0;
}
`
