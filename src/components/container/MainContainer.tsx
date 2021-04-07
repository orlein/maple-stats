import React from "react";
import styled from "styled-components";
import Body from "../layouts/Body";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const MainContainer: React.FunctionComponent<{}> = ({ children }) => {
  return (
    <Wrapper>
      <Header>
        한국 메이플스토리 머시기머시기
      </Header>
      <Body>{children}</Body>
      <Footer>
        문의사항은 info@maple-story.something.com
      </Footer>
    </Wrapper>
  );
};

export default MainContainer;
