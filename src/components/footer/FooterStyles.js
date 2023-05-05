import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  
  background-color: #4287f5;
  color: #fff;
  padding: 0;
  margin:0;
`;

export const FooterRow = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
padding: 10px;
`

export const Link = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;