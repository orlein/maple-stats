import { Option } from "../types/option"
import statOptions from "./statOptions";

const weaponOptions: Option[] = [
  ...statOptions,
  {
    value: "bossdamage",
    text: "보스몬스터 공격 시 데미지 %",
  },
  {
    value: "damage",
    text: "데미지",
  },
];

export default weaponOptions;
