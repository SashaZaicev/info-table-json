import {addTables, startTable} from "../actions";
import {initialState} from "../tablesReducer";

export type InitStateType = typeof initialState;
export type AddTablesType = ReturnType<typeof addTables>;
export type StartTableType = ReturnType<typeof startTable>;
export type ActionsType = AddTablesType | StartTableType;
export type TableType = {
  columnsName: DataType,
  data: DataType[],
  _id: string,
};
export type DataType = {
  date: string,
  name: string,
  quantity: string,
  distance: string,
  column5: string,
  column6: string,
  column7: string,
  column8: string,
  column9: string,
  column10: string,
  column11: string,
  column12: string,
  column13: string,
  column14: string,
  column15: string,
  column16: string,
};
