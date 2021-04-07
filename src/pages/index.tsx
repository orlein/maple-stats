import React from "react";
import MainContainer from "../components/container/MainContainer";
import WeaponSelector from "../components/weapon/WeaponSelector";

type IndexPageProps = {
  
}
const IndexPage: React.FunctionComponent<IndexPageProps> = () => {

  return (
    <MainContainer>
      <WeaponSelector />     
    </MainContainer>
  )
}

export default IndexPage;
