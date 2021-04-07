import styled from "styled-components";

const HeaderWrapper = styled.header`
  height: 120px;
`

const Header: React.FunctionComponent<{}> = ({ children }) => {
  return (
    <HeaderWrapper>
      {children}
    </HeaderWrapper>
  )
}

export default Header;
