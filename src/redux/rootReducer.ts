import { combineReducers } from "redux";
import SessionReducer from "./Session/slice";
import { SessionReducerState } from "./Session/interfaces";

interface RootReducer {
  Session: SessionReducerState;
}

const rootReducer = combineReducers<RootReducer>({
  Session: SessionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
