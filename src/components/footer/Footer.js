import React from "react";
import { FooterRow, FooterWrapper } from "./FooterStyles";
import {
  FooterLeftColumn,
  FLDiv,
  FLText,
  FLIconDiv,
  FLIcons,
  FLImgDiv,
  FLImg
} from "./FooterLeftStyles";
import { FooterCenterColumn, FCText, FCDiv } from "./FooterCenterStyles";
import {
  FooterRightColumn,
  FRDiv,
  FRHeader,
  FRIconDiv,
  FRText,
} from "./FooterRightStyles";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import logo from './../images/logo-color-removebg.png'

function Footer() {
  return (
    <FooterWrapper>
      <FooterRow>
        {/* Logo and Short Description */}

        <FooterLeftColumn>
          <FLImgDiv>
          <FLImg src={ logo } alt="hinlo-logo"></FLImg>
        </FLImgDiv>
          <FLDiv>
            <FLText>
            {/* <FLImg src='/img/icon1.png' alt="PrivateAlert"></FLImg> */}
            <br />
              Hinlo provides professional cleaning and tidying services to
              individuals, households, and businesses. The goal of Hinlo is to
              help clients maintain a clean, organized, and hygienic living or
              working environment, while reducing stress and freeing up time for
              other activities.
            </FLText>
          </FLDiv>

          {/* For Social Media ICONS */}
          <FLIconDiv>
            <FLIcons>
              <FacebookRoundedIcon fontSize="medium" />
            </FLIcons>
            <FLIcons>
              <YouTubeIcon fontSize="medium" />
            </FLIcons>
            <FLIcons>
              <InstagramIcon fontSize="medium" />
            </FLIcons>
            <FLIcons>
              <TwitterIcon fontSize="medium" />
            </FLIcons>
          </FLIconDiv>
        </FooterLeftColumn>

        {/* Contact Information */}

        <FooterRightColumn>
          <FRHeader>Contact Information</FRHeader>
          <FRDiv>
            <FRIconDiv> <LocationOnIcon fontSize="medium" /></FRIconDiv>
            <FRText>Purok 13, Villa Paraiso, Ampayon, Butuan City, Philippines </FRText>
          </FRDiv>
          <FRDiv>
            <FRIconDiv> <PhoneEnabledIcon fontSize="medium" /></FRIconDiv>
            <FRText> +639073591168 </FRText>
          </FRDiv>
          <FRDiv>
            <FRIconDiv> <EmailIcon fontSize="medium" /></FRIconDiv>
            <FRText> hinloservices@gmail.com </FRText>
          </FRDiv>
        </FooterRightColumn>
      </FooterRow>

      <FooterCenterColumn>
        <FCDiv>
          <FCText>&copy; 2019, HINLO Services</FCText>
        </FCDiv>
      </FooterCenterColumn>
    </FooterWrapper>
  );
}

export default Footer;
