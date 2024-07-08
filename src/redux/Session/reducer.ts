// import {
//   changeNetworkStatus,
//   failureLogin,
//   setPageName,
//   startLogin,
//   startLogout,
//   successLogin,
//   successLogout,
//   toggleMenu,
// } from "./actions";

// import { SessionReducerState } from "./interfaces";
// import { handleActions } from "redux-actions";
// import persistReducer from "redux-persist/lib/persistReducer";
// import storage from "../storage";

// const initialState: SessionReducerState = {
//   pageName: "",
//   token: "",
//   networkError: false,
//   isMenuHidden: false,
// };

// const persistConfig = {
//   key: "session",
//   storage,
//   blacklist: ["isMenuHidden"],
// };

// const reducer = handleActions(
//   {
//     [startLogin as any]: (state: SessionReducerState) => {
//       return {
//         ...state,
//       };
//     },
//     [successLogin as any]: (state: SessionReducerState, { payload }: any) => {
//       return { ...state, token: payload.token };
//     },

//     [failureLogin as any]: (state: SessionReducerState) => {
//       return { ...state, token: "" };
//     },

//     [changeNetworkStatus as any]: (
//       state: SessionReducerState,
//       { payload }: any
//     ) => ({
//       ...state,
//       networkError: payload,
//     }),

//     [toggleMenu as any]: (state: SessionReducerState) => ({
//       ...state,
//       isMenuHidden: !state.isMenuHidden,
//     }),

//     [setPageName as any]: (state: SessionReducerState, { payload }: any) => ({
//       ...state,
//       pageName: payload,
//     }),

//     [startLogout as any]: (state: SessionReducerState) => ({
//       ...state,
//       token: initialState.token,
//     }),

//     [successLogout as any]: () => ({
//       ...initialState,
//     }),
//   },
//   initialState
// );

// const SessionReducer = persistReducer(persistConfig, reducer);

// export default SessionReducer;
