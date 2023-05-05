import styled from 'styled-components';

export const ServiceRightColumn = styled.div`
float: left;
width: 33.3%;
margin-bottom: 16px;
padding: 0 8px;
box-sizing: border-box;
@media (max-width: 992px) {
  margin-right: 8rem;
  }
@media screen and (max-width: 650px) {
    width: 100%;
    display: block;
  }
`

export const SRCardDiv = styled.div `
margin-top: 1rem;
margin-bottom: 3.5rem;
margin-left: 1rem;
@media (max-width: 992px) {
  width: 120%;
  }
  @media (max-width: 800px) {
    width: 200%;
    margin-left:8rem;
    }
  @media (max-width: 700px) {
    width: 300%;
    margin-left:4rem;
    }
  @media (max-width: 600px) {
    width: 120%;
    margin-left:2rem;
    }
@media (max-width: 500px) {
    width: 120%;
    margin-left:2rem;
    }
`