declare module "redux-persist/es/storage/createWebStorage" {
  import { WebStorage } from "redux-persist/es/types";

  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function createWebStorage(type: string): WebStorage;
}

declare module "redux-persist/lib/storage/createWebStorage" {
  export * from "redux-persist/es/storage/createWebStorage";
  export { default } from "redux-persist/es/storage/createWebStorage";
}

declare module "redux-persist/es/persistReducer" {
  import { Action, Reducer } from "redux";
  import { PersistState, PersistConfig } from "redux-persist/es/types";

  interface PersistPartial {
    _persist: PersistState;
  }

  /**
   * @desc It provides a way of combining the reducers, replacing redux's @see combineReducers
   * @param config persistence configuration
   * @param baseReducer reducer used to persist the state
   */
  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function persistReducer<S, A extends Action = Action>(
    config: PersistConfig<S>,
    baseReducer: Reducer<S, A>
  ): Reducer<S & PersistPartial, A>;
}

declare module "redux-persist/lib/persistReducer" {
  export * from "redux-persist/es/persistReducer";
  export { default } from "redux-persist/es/persistReducer";
}

declare module "redux-persist/integration/react" {
  import { ReactNode, PureComponent } from "react";
  import { Persistor } from "redux-persist/es/types";

  /** @see PersistGate */
  interface PersistGateProps {
    persistor: Persistor;
    onBeforeLift?(): void | Promise<void>;
    children?: ReactNode | ((bootstrapped: boolean) => ReactNode);
    loading?: ReactNode;
  }

  /** @see PersistGate */
  interface PersistorGateState {
    bootstrapped: boolean;
  }

  /**
   * Entry point of your react application to allow it persist a given store @see Persistor and its configuration.
   * @see Persistor
   * @see PersistGateProps
   * @see PersistGateState
   */
  class PersistGate extends React.PureComponent<
    PersistGateProps,
    PersistorGateState
  > {}
}

declare module "redux-persist/es/integration/react" {
  export * from "redux-persist/integration/react";
}

declare module "redux-persist/lib/integration/react" {
  export * from "redux-persist/integration/react";
}
