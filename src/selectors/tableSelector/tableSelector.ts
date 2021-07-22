import {AppRootStateType} from "src/store/store";
import {TableType} from "../../store/tableReducer/types";

export const tableSelector = (state: AppRootStateType): TableType[][] => (
  state.tablePage.tables
);
