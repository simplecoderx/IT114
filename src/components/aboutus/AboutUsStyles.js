import styled from 'styled-components';

export const AboutUsWrapper = styled.div`
max-width: 1300px;
margin: 0 auto; 
margin-bottom: -3rem;
// background-color:green;
`;

export const AboutUsRow = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
padding: 10px;

@media (max-width: 768px) {
  flex-basis: 100%;
}

@media (max-width: 576px) {
  flex-basis: 100%;
  margin-bottom: 1.5rem;
}

`

export const Link = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;