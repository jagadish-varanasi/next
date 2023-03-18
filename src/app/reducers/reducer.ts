import { Reducer } from "react";

export enum CountActionKind {
  ADD = "ADD",
  SUBTRACT = "SUBTRACT",
  CLEAR = "CLEAR",
}

// An interface for our actions
export interface CountAction {
  type: CountActionKind;
  payload: number;
}

// An interface for our state
export interface CountState {
  count: number;
  history: Array<{
    opId: number;
    prevValue: number;
    type: CountActionKind;
    opValue: number;
  }>;
}

export const reducer: Reducer<CountState, CountAction> = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CountActionKind.ADD:
      return {
        ...state,
        history: [
          ...state.history,
          {
            opId: state.history.length + 1,
            prevValue: state.count,
            type: CountActionKind.ADD,
            opValue: payload,
          },
        ],
        count: state.count + payload,
      };
    case CountActionKind.SUBTRACT:
      return {
        ...state,
        history: [
          ...state.history,
          {
            opId: state.history.length + 1,
            prevValue: state.count,
            type: CountActionKind.SUBTRACT,
            opValue: payload,
          },
        ],
        count: state.count - payload,
      };
    case CountActionKind.CLEAR:
      return {
        history: [],
        count: 0,
      };
    default:
      return state;
  }
};
