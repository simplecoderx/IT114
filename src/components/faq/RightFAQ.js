import styled from 'styled-components';

export const FAQRightColumn = styled.div`
  flex-basis: 50%;
  text-align: center;
  right: 0;
  // top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 50px;

  @media (max-width: 992px) {
    flex-basis: 50%;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 800px) {
    flex-basis: 100%;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 700px) {
    flex-basis: 100%;
  }
  
  @media (max-width: 576px) {
    flex-basis: 100%;
    margin-bottom: 1.5rem;
  }
`;

// export const RFAQDiv = styled.div`
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


// export const RFAQImgDiv = styled.div`

// `
// export const RFAQImg = styled.img`
// width:100%;
// `

// export const RFAQTextDiv = styled.div`
// display: flex;
// align-items: center;
// `

// export const RFAQText = styled.p`
// // display: flex;
// // align-items: left;
// text-align:left;
// text-align-last: left;
// `;

// export const RFAQText2 = styled.p`
// font-size: ${props => props.fontSize || '1rem'};
// // display: flex;
// // align-items: left;
// text-align:right;
// text-align-last: right;
// `

// export const RFAQHeader2 = styled.div`
// font-size: 5rem;
// color: black;
// text-align:right;
// text-align-last: right;
// `;

// export const RFAQIconDiv = styled.div`
// // margin-left: 40%;
// // display: flex;
// // align-items: center;

// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// `
// export const RFAQIcons = styled.img`
// margin-right: 2rem;
// margin-bottom: 1rem;
// width:50%;
// `
