const ADD_TABLES = 'ADD_TABLES'
const START_TABLE = 'START_TABLE'


const initialState= {
    tables: [] as Array<TableType[]>
}
type InitStateType = typeof initialState

export const tablesReducer = (state = initialState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case ADD_TABLES: {
            return {
                ...state,
                tables: [...state.tables, action.newTable]}
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
}
// type ActionsType = {
//     newtable: TableType[],
//     table: TableType[],
//     type: string
// }

export const addTables = (newTable: TableType[]) => ({type: ADD_TABLES, newTable}as const)

export type AddTablesType = ReturnType<typeof addTables>
export const startTable = (table: TableType[]) => ({type: START_TABLE, table}as const)

export type StartTableType = ReturnType<typeof startTable>
type ActionsType = AddTablesType | StartTableType

export type TableType = {
    columnsName: DataType;
    data: DataType[];
    _id: string
}
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
}
