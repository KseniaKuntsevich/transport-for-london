import * as types from './actionsTypes';

export const changeMenuActive = (data) => ({
  type: types.MENU_CHANGE_ACTIVE,
  payload: data,
});
