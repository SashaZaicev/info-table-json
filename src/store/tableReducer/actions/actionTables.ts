import {ADD_TABLES, START_TABLE} from "../constants";
import {TableType} from "../types";

export const addTables = (newTable: TableType[]) => ({
  type: ADD_TABLES,
  newTable
} as const);
export const startTable = (table: TableType[]) => ({
  type: START_TABLE,
  table
} as const);
