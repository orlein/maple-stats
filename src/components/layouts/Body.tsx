import React from "react";
import styled from "styled-components";

const BodyWrapper = styled.main`
  min-height: 600px;
`

const Body: React.FunctionComponent<{}> = ({ children }) => {
  return (
    <BodyWrapper>
      {children}
    </BodyWrapper>
  )
}

export default Body;
