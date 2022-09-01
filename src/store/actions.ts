import { actionTypes } from "src/store";
import { Item } from "src/interface";

export const changeTab = (index: number) => {
  return {
    type: actionTypes.CHANGE_TAB,
    payload: { index }
  }
}

export const selectItem = (index: number) => {
  return {
    type: actionTypes.SELECT_ITEM,
    payload: { index }
  }
}

export const deselectItem = () => {
  return {
    type: actionTypes.DESELECT_ITEM,
    payload: { }
  }
}

export const addItem = (item: Item) => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: { item }
  }
}
export const deleteItem = (index: number) => {
  return {
    type: actionTypes.DELETE_ITEM,
    payload: { index }
  }
}
