import React from 'react'
import { ServiceRow, ServiceWrapper } from './ServicesStyles'
import { SLText, SLTextDiv, ServiceLeftColumn, ServicesHrLines } from './ServicesLStyles.js'
import { SCCardDiv, ServiceCenterColumn } from './ServicesCStyles.js'
import { SRCardDiv, ServiceRightColumn } from './ServicesRStyles'
import ServiceCard1 from './cards/Card1'
import ServiceCard3 from './cards/Card3'
import ServiceCard2 from './cards/Card2'
import ServiceCard4 from './cards/Card4'



function Services() {
  return (
    <ServiceWrapper id="services">
      <ServiceRow>
        <ServiceLeftColumn>
          <ServicesHrLines>
            Services
          </ServicesHrLines>
          <SLTextDiv>
            <SLText>
              Services You Will Get by Acquiring Us
            </SLText>
          </SLTextDiv>
        </ServiceLeftColumn>

        <ServiceCenterColumn>
          <SCCardDiv>
            <ServiceCard1/>
          </SCCardDiv>
          <SCCardDiv>
          <ServiceCard3/>
          </SCCardDiv>
        </ServiceCenterColumn>

        <ServiceRightColumn>
          <SRCardDiv>
            <ServiceCard2 />
          </SRCardDiv>
          <SRCardDiv>
          <ServiceCard4 />
          </SRCardDiv>
        </ServiceRightColumn>

      </ServiceRow>
    </ServiceWrapper>
  )
}

export default Services