import React from "react";
import styled from "styled-components";
import { Option } from "../../types/option";
import { stepOptions, weaponOptions } from "../../constants";

type GambledWeaponOption = {
  weaponOption: Option;
  stepOption: Option;
};

const initialGambledWeaponOption: GambledWeaponOption = {
  stepOption: stepOptions[0],
  weaponOption: weaponOptions[0],
};

type WeaponSelectorState = {
  // max: 4
  options: GambledWeaponOption[];
};

const initialWeaponSelectorState: WeaponSelectorState = {
  options: [],
};

const WeaponSelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const WeaponButtons = styled.div`
  flex-direction: row;
`;

const WeaponSelects = styled.div`
  flex-direction: column;
`

const WeaponSelect = styled.div`
  flex-direction: row;
`

const WeaponSelector: React.FunctionComponent<{}> = ({ children }) => {
  const [state, setState] = React.useState<WeaponSelectorState>(
    initialWeaponSelectorState
  );

  const handleAddGambledOption = () => {
    if (state.options.length < 4) {
      setState((prev) => ({
        ...prev,
        options: [...prev.options, initialGambledWeaponOption],
      }));
    }
  };

  const handleRemoveGambledOption = () => {
    if (state.options.length > 1) {
      setState((prev) => ({
        ...prev,
        options: [...prev.options.slice(0, prev.options.length - 1)],
      }));
    }
  };

  const handleChangeWeaponOption = (i: number) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    const newWeaponOptionIndex = weaponOptions.findIndex(v => v.value === newValue);

    if (newWeaponOptionIndex > -1) {
      setState((prev) => ({ 
        ...prev, 
        options: [
          ...prev.options.slice(0, i),
          {
            ...prev.options[i],
            weaponOption: weaponOptions[newWeaponOptionIndex],
          },
          ...prev.options.slice(i + 1)
        ]
      }))
    }
  }

  const handleChangeStepOption = (i: number) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    const newStepOptionIndex = stepOptions.findIndex(v => v.value === newValue);

    if (newStepOptionIndex > -1) {
      setState((prev) => ({ 
        ...prev, 
        options: [
          ...prev.options.slice(0, i),
          {
            ...prev.options[i],
            stepOption: stepOptions[newStepOptionIndex],
          },
          ...prev.options.slice(i + 1)
        ]
      }))
    }
  }

  return (
    <WeaponSelectorWrapper>
      <WeaponButtons>
        <button onClick={handleAddGambledOption}>옵션추가</button>
        <button onClick={handleRemoveGambledOption}>옵션삭제</button>
      </WeaponButtons>
      <WeaponSelects>
        {state.options.map((option, i1) => {
          return (
            <WeaponSelect key={`weapon-select-${i1}`}>
              <select key={`selected-weapon-option_${i1}`} onChange={handleChangeWeaponOption(i1)}>
                {weaponOptions.map((weaponOption, i2) => (
                    <option key={`weapon-option-${i1}-${i2}`} value={weaponOption.value}>{weaponOption.text}</option>
                  )
                )}
              </select>
              <select key={`selected-step-option_${i1}`} onChange={handleChangeStepOption(i1)}>
                {stepOptions.map((stepOption, i2) => (
                    <option key={`step-option-${i1}-${i2}`} value={stepOption.value}>{stepOption.text}</option>
                  )
                )}
              </select>
            </WeaponSelect>
          )
        })}
      </WeaponSelects>
    </WeaponSelectorWrapper>
  );
};

export default WeaponSelector;
