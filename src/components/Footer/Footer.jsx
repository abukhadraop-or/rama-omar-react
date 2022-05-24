import React from "react";
import {
  FooterCont,
  FooterContainer,
  FooterImage,
  FooterInfo,
  FooterNav,
  FooterWrapper,
} from "components/Footer/footer.style";

/**
 * Renders the footer.
 * @returns Footer
 */
export function NavFooter() {
  return (
    <FooterNav>
      <FooterContainer>
        <FooterImage src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" />
        <FooterWrapper>
          <FooterCont>
            <FooterInfo title="Title">THE BASICS</FooterInfo>
            <FooterInfo>About TMDB</FooterInfo>
            <FooterInfo>Contact Us</FooterInfo>
            <FooterInfo>Support Forums</FooterInfo>
            <FooterInfo>API</FooterInfo>
            <FooterInfo>System Status</FooterInfo>
          </FooterCont>

          <FooterCont>
            <FooterInfo title="Title">GET INVOLVED</FooterInfo>
            <FooterInfo>Contribution Bible</FooterInfo>
            <FooterInfo>Add New Movie</FooterInfo>
            <FooterInfo>Add New TV Show</FooterInfo>
          </FooterCont>

          <FooterCont>
            <FooterInfo title="Title">COMMUNITY</FooterInfo>
            <FooterInfo>Guidelines</FooterInfo>
            <FooterInfo>Discussions</FooterInfo>
            <FooterInfo>Leaderboard</FooterInfo>
            <FooterInfo>Twitter</FooterInfo>
          </FooterCont>

          <FooterCont>
            <FooterInfo title="Title">LEGAL</FooterInfo>
            <FooterInfo>Terms of Use</FooterInfo>
            <FooterInfo>API Terms of Use</FooterInfo>
            <FooterInfo>Privacy Policy</FooterInfo>
          </FooterCont>
        </FooterWrapper>
      </FooterContainer>
    </FooterNav>
  );
}

export default NavFooter;
