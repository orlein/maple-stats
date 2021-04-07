import React from "react";
import MainContainer from "../components/container/MainContainer";
import { statOptions } from "../constants";
import { Option } from "../types/option";
type IndexPageProps = {
  
}

type IndexPageState = {
  stat: Option;
}

const initialIndexPageState: IndexPageState = {
  stat: statOptions[0]
}

const IndexPage: React.FunctionComponent<IndexPageProps> = () => {
  const [ state, setState ] = React.useState<IndexPageState>(initialIndexPageState)

  return (
    <MainContainer>
      <div>현재 선택한 stat: {state.stat.text}</div>
      <select onChange={e => {
        const newValue = e.target.value;

        const newIndex = statOptions.findIndex(v => v.value === newValue);

        if (newIndex > -1) {
          setState((prev) => ({ 
            ...prev, 
            stat: statOptions[newIndex]
          }))
        }
      }}>
        {statOptions.map(statOption => {
          return (
            <option value={statOption.value}>{statOption.text}</option>
          )
        })}
      </select>
    </MainContainer>
  )
}

export default IndexPage;
