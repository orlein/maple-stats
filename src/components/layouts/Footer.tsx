import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  height: 120px;
`

const Footer: React.FunctionComponent<{}> = ({ children }) => {
  return (
    <FooterWrapper>
      {children}
    </FooterWrapper>
  )
}

export default Footer;