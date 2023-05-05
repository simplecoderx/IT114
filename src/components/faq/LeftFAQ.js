import styled from 'styled-components';

export const FAQLeftColumn = styled.div`
  flex-basis: 50%;
  text-align: center;
  right: 0;
  // top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 50px;
  @media (max-width: 1200px) {
    flex-basis: 50%;
    margin-bottom: -5rem;
    margin-top: -5rem;
  }
  @media (max-width: 992px) {
    flex-basis: 50%;
    margin-bottom: -5rem;
    margin-top: -6.5rem;
  }
  @media (max-width: 800px) {
    flex-basis: 100%;
    margin-bottom: -5rem;
    margin-top: 1rem;
  }
  @media (max-width: 700px) {
    flex-basis: 100%;
    margin-bottom: -5rem;
  }
  @media (max-width: 600px) {
    flex-basis: 100%;
    margin-bottom: -5rem;
  }
  @media (max-width: 500px) {
    flex-basis: 100%;
    margin-bottom: -5rem;
  }
`;

// export const LFAQDiv = styled.div`
// // margin-left: 20%;
// display: flex;
// justify-content: space-between;
// // position: fixed;
// // top: 50%;
// // right: 0;
// // transform: translateY(-50%);
// // background-color: #ccc;
// // padding: 10px;
// // border-radius: 5px;

// @media (max-width: 768px) {
//   flex-basis: 100%;
//   margin-bottom: 20px;
// }
// `;


// export const LFAQImgDiv = styled.div`

// `
// export const LFAQImg = styled.img`
// width:100%;
// `

// export const LFAQTextDiv = styled.div`
// display: flex;
// align-items: center;
// `

// export const LFAQText = styled.p`
// // display: flex;
// // align-items: left;
// text-align:left;
// text-align-last: left;
// `;

// export const LFAQText2 = styled.p`
// font-size: ${props => props.fontSize || '1rem'};
// // display: flex;
// // align-items: left;
// text-align:right;
// text-align-last: right;
// `

// export const LFAQHeader2 = styled.div`
// font-size: 5rem;
// color: black;
// text-align:right;
// text-align-last: right;
// `;

// export const LFAQIconDiv = styled.div`
// // margin-left: 40%;
// // display: flex;
// // align-items: center;

// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// `
// export const LFAQIcons = styled.img`
// margin-right: 2rem;
// margin-bottom: 1rem;
// width:50%;
// `
