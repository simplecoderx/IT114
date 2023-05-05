import styled from 'styled-components';


export const ServiceWrapper = styled.div`
max-width: 1200px;
margin: 0 auto; 
// background-color: green;
@media (max-width: 1200px) {
  margin-bottom: 1rem;
  // background-color: orange;
}
// @media (max-width: 992px) {
//   margin-bottom: 1rem;
//   background-color: pink;
// }
// @media (max-width: 800px) {
//   margin-bottom: 1rem;
//   background-color: gray;
// }
// @media (max-width: 700px) {
//   margin-bottom: 1rem;
//   background-color: magenta;
// }
// @media (max-width: 600px) {
//   margin-bottom: 1rem;
//   background-color: blue;
// }
// @media (max-width: 500px) {
//   margin-bottom: 1rem;
//   background-color: green;
// }
`

export const ServiceRow = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
padding: 10px;
margin-bottom: 5rem;
// font-weight: bold;

// @media (max-width: 768px) {
//   flex-basis: 100%;
// }

// @media (max-width: 576px) {
//   flex-basis: 100%;
//   margin-bottom: 1.5rem;
// }
`
