import { CountActionKind } from "../reducers/reducer";

const OperationMapper = {
  ADD: "+",
  SUBTRACT: "-",
  CLEAR: "",
};

export const formatMessage = (
  prevValue: number,
  type: CountActionKind,
  opValue: number
) => {
  const isAdd = type === CountActionKind.ADD;
  return `${prevValue} ${OperationMapper[type]}  ${opValue} = ${
    isAdd ? prevValue + opValue : prevValue - opValue
  }`;
};
