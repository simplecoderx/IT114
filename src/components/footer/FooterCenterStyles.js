import styled from 'styled-components';

export const FooterCenterColumn = styled.div`
  flex-basis: 33%;
  margin-top: auto;
  margin-bottom: 0px;
  padding: 0;
  text-align: center;

  @media (max-width: 768px) {
    flex-basis: 100%;
    margin-bottom: 20px;
  }
`;

export const FCDiv = styled.div`
text-align: center;

@media (min-width: 768px) {
  text-align: left;
}
`

export const FCText = styled.p`
text-align: center;
padding: 1rem 0;
`