import styled from 'styled-components';


export const FooterRightColumn = styled.div`
background-color: transparent;
flex-basis: 43%;
padding: 0 1rem;
text-align: center;
right: 0;
top: 0;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
padding: 50px;

@media (max-width: 768px) {
  flex-basis: 100%;
}

@media (max-width: 576px) {
  flex-basis: 100%;
  margin-bottom: 1.5rem;
}
`;

export const FRDiv = styled.div`
display: flex;
align-items: center;
// margin-right: 0.5rem;
// margin-bottom: 0rem;
// margin-left: 0.5rem;
// margin-right: 0.5rem;
padding: -5rem;
// background-color: red;
`

export const FRText = styled.p`
margin-top: 1rem;
// margin-bottom: 0.4rem;
@media (max-width: 1200px) {
  margin-left: -2px;
}
`

export const FRHeader = styled.h2`
margin-top: 2rem;
margin-bottom: 1rem;
background-color: transparent;
font-size:1.9rem;
display: flex;
margin-right: 20%;
align-items: justify;
@media (max-width: 900px) {
margin-left:5rem;
}
@media (max-width: 800px) {
  margin-left:10rem;
  }
@media (max-width: 700px) {
  margin-left:7rem;
  }
@media (max-width: 600px) {
  margin-left:5rem;
  }
@media (max-width: 500px) {
  margin-left:5rem;
  }
`

export const FRIconDiv = styled.div`
margin-right: 0.5rem;
// margin-top: 0.75rem;
display: inline-block;
`

// export const FLIcons = styled.span`
//   display: inline-block;
//   margin-right: 100px;
// `

// export const FRGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-gap: 20px;
// `;

// export const FRIconDiv = styled.div`
//   display: flex;
//   justify-content: flex-end;
// `;

// export const FRIcons = styled.span`
//   display: inline-block;
//   margin-right: 10px;
// `;