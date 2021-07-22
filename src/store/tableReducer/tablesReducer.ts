import {ADD_TABLES, START_TABLE} from "./constants";
import {ActionsType, InitStateType, TableType} from "./types";

export const initialState = {
  tables: [] as Array<TableType[]>
}

export const tablesReducer = (state = initialState, action: ActionsType): InitStateType => {
  switch (action.type) {
    case ADD_TABLES: {
      return {
        ...state,
        tables: [...state.tables, action.newTable]
      }
    }
    case START_TABLE: {
      return {
        ...state,
        tables: [action.table]
      }
    }
    default:
      return state
  }
};
