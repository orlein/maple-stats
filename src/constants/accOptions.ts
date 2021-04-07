import { Option } from "../types/option";
import statOptions from "./statOptions";

const accOptions: Option[] = [
  ...statOptions,
  {
    value: "speed",
    text: "이동속도",
  },
  {
    value: "jump",
    text: "점프력",
  },
];

export default accOptions;
