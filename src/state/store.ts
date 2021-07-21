import {combineReducers, createStore} from "redux";
import {tablesReducer} from "./tablesReducer";


const rootReducer = combineReducers({
    tablePage: tablesReducer,
})

export const store = createStore(rootReducer);
export type AppRootStateType = ReturnType<typeof rootReducer>
