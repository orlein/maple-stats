import { Option } from "../types/option";

const statOptions: Option[] = [
  {
    value: "",
    text: "Select",
  },
  {
    value: "none",
    text: "선택 안함",
  },
  {
    value: "str",
    text: "STR",
  },
  {
    value: "dex",
    text: "DEX",
  },
  {
    value: "int",
    text: "INT",
  },
  {
    value: "luk",
    text: "LUK",
  },
  {
    value: "strdex",
    text: "STR+DEX",
  },
  {
    value: "strint",
    text: "STR+INT",
  },
  {
    value: "strluk",
    text: "STR+LUK",
  },
  {
    value: "dexint",
    text: "DEX+INT",
  },
  {
    value: "dexluk",
    text: "DEX+LUK",
  },
  {
    value: "intluk",
    text: "INT+LUK",
  },
  {
    value: "hp",
    text: "최대 HP",
  },
  {
    value: "mp",
    text: "최대 MP",
  },
  {
    value: "leveldown",
    text: "착용 레벨 감소",
  },
  {
    value: "shield",
    text: "방어력",
  },
  {
    value: "power",
    text: "공격력",
  },
  {
    value: "charm",
    text: "마력",
  },
  {
    value: "allstat",
    text: "올스탯%",
  },
];

export default statOptions;
