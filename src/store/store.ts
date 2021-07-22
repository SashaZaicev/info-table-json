import {combineReducers, createStore, Store} from "redux";
import {tablesReducer} from "src/store/tableReducer";

const rootReducer = combineReducers({
    tablePage: tablesReducer,
});

export const store: Store<AppRootStateType> = createStore(rootReducer);
export type AppRootStateType = ReturnType<typeof rootReducer>;
