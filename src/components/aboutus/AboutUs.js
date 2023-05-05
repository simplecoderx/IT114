import React from 'react'
import { AboutUsRow, AboutUsWrapper } from './AboutUsStyles'
import { AboutUsLeftColumn, LAUDiv, LAUImg, LAUImgDiv } from './LeftAboutUsStyles'
import { AboutUsRightColumn, RAUBorderedText, RAU2BorderedText , RAUDiv, RAUHrLines, RAUIconDiv, RAUIcons, RAUNonBorderedText, RAUText, RAUText2, RAUTextDiv } from './RightAboutUsStyles'

const AboutUs = () => {
  return (

    <AboutUsWrapper id="about">
      <AboutUsRow>
        <AboutUsLeftColumn>
          <LAUDiv>
            <LAUImgDiv>
              <LAUImg src='/img/aboutuspicture.png' alt="Hinlo Services" />
            </LAUImgDiv>
          </LAUDiv>
        </AboutUsLeftColumn>

        <AboutUsRightColumn>
          <RAUHrLines>About Us</RAUHrLines>
          <RAUTextDiv>
            <RAUNonBorderedText>HINLO</RAUNonBorderedText>
            <RAUBorderedText>Services</RAUBorderedText>
          </RAUTextDiv>
          <RAU2BorderedText fontSize='3rem' >Est. 2019</RAU2BorderedText>
          <RAUTextDiv>
            <RAUText>
              Hinlo Services aimed to help clients maintain a clean, organized, and hygienic living or working environment,
              while reducing stress and freeing up time for other activities.
            </RAUText>
          </RAUTextDiv>
          
          
          <RAUDiv>
          <RAUIconDiv>
            <RAUIcons src='/img/ecofriendlyicon.png' alt="Hinlo Services"></RAUIcons>
          </RAUIconDiv> 
          <RAUText2>
          Eco-friendly and Non-toxic cleaning products to ensure that
          our cleaning services are safe for our clients, their families, and their pets. 
          </RAUText2>
          </RAUDiv>
          <RAUDiv>
          <RAUIconDiv>
            <RAUIcons src='/img/excellentserviceicon.png' alt="Hinlo Services"></RAUIcons>
          </RAUIconDiv> 
          <RAUText2>
          
          Our team is reliable, punctual, and trustworthy, 
          and we always go above and beyond to exceed our clients' expectations.
          </RAUText2>
          </RAUDiv>
          <RAUDiv>
          <RAUIconDiv>
            <RAUIcons src='/img/contactusicon.png' alt="Hinlo Services"></RAUIcons>
          </RAUIconDiv> 
          <RAUText2>
          Ensuring that our clients are completely satisfied with our cleaning services and
          to providing the highest level of customer service.
          </RAUText2>
          </RAUDiv>
        </AboutUsRightColumn>
      </AboutUsRow>
    </AboutUsWrapper>



  )
}

export default AboutUs