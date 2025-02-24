import { Reducer, UnknownAction, combineReducers } from "redux";

import ConteudoReducer from "./Conteudo/slice";
import { ConteudoReducerState } from "./Conteudo/interfaces";
import { PersistPartial } from "redux-persist/es/persistReducer";
import SessionReducer from "./Session/slice";
import { SessionReducerState } from "./Session/interfaces";
import UserReducer from "./User/slice";
import { UserReducerState } from "./User/interfaces";

interface RootReducer {
  Conteudo: Reducer<ConteudoReducerState & PersistPartial, UnknownAction>;
  Session: Reducer<SessionReducerState & PersistPartial, UnknownAction>;
  User: Reducer<UserReducerState & PersistPartial, UnknownAction>;
}

const rootReducer = combineReducers<RootReducer>({
  Conteudo: ConteudoReducer,
  Session: SessionReducer,
  User: UserReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
