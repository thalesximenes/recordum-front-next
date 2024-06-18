import { createActions } from "redux-actions";

export const { toggleMenu, setPageName } = createActions({
  TOGGLE_MENU: () => null,
  SET_PAGE_NAME: (pageName: any) => pageName,
});

/**
 * Description: Login
 */
export const { startLogin, successLogin, failureLogin, changeNetworkStatus } =
  createActions({
    START_LOGIN: (params: any) => params,
    SUCCESS_LOGIN: (data: any) => data,
    FAILURE_LOGIN: () => null,
    CHANGE_NETWORK_STATUS: (data: any) => data,
  });

/**
 * Description: Logout
 */
export const { startLogout, successLogout, failureLogout } = createActions({
  START_LOGOUT: (params: any) => params,
  SUCCESS_LOGOUT: (data: any) => data,
  FAILURE_LOGOUT: () => null,
});
