import { actionTypes as types } from "src/store";
import { Item } from "src/interface";

interface State {
  selected: null | object;
  activeTab: number;
  items: Item[];
}

interface Payload {
  index?: number
  item?: Item
}

interface Action {
  type: string;
  payload: Payload
}

export const initialState = {
  selected: null,
  activeTab: 0,
  items: []
}

export function reducer(state: State, { type, payload }: Action) {
  const { index = 0, item } = payload;
  switch (type) {
    case types.CHANGE_TAB:
      return { ...state, activeTab: index };
    case types.SELECT_ITEM:
      return { ...state, selected: state.items[index]};
    case types.DESELECT_ITEM:
      return { ...state, selected: null};
    case types.ADD_ITEM:
      return { ...state, items: [...state.items, item]};
    case types.DELETE_ITEM:
      return { ...state, items: [...state.items.slice(0, index), ...state.items.slice(index + 1)]};
    default:
      return state;
  }
}
