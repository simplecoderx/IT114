import React from 'react'
import { FAQBorderedText, FAQDiv, FAQHrLines, FAQNonBorderedText, FAQRow, FAQTextDiv, FAQWrapper } from './FAQStyles'
import { FAQLeftColumn } from './LeftFAQ'
import { FAQRightColumn } from './RightFAQ'
import LeftAccordion from './LeftAccordion'
import RightAccordion from './RightAccordion'

const FAQ = () => {
    return (

        <FAQWrapper id="faq">
            <FAQHrLines>FAQS</FAQHrLines>
            <FAQTextDiv>
                <FAQBorderedText className="bordered-text">Frequently</FAQBorderedText>
                <FAQNonBorderedText fontSize='5rem' >Asked Questions</FAQNonBorderedText>
            </FAQTextDiv>
            <FAQDiv>
            <FAQRow>
                <FAQLeftColumn>
                    <LeftAccordion/>
                </FAQLeftColumn>
                <FAQRightColumn>
                    <RightAccordion/>
                </FAQRightColumn>
            </FAQRow></FAQDiv>
        </FAQWrapper>

    )
}

export default FAQ