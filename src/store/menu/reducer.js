import * as types from './actionsTypes';

const defaultData = {
  active: 0,
};

export const menuReducer = (state = defaultData, action) => {
  switch (action.type) {
    case types.MENU_CHANGE_ACTIVE:
      return {
        ...state,
        active: action.payload,
      };
    default:
      return state;
  }
};
