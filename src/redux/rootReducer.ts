import SessionReducer from "./Session/reducer";
import { SessionReducerState } from "./Session/interfaces";
import { combineReducers } from "redux";

interface RootReducer {
  Session: SessionReducerState;
}

const rootReducer = combineReducers<RootReducer>({
  Session: SessionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
