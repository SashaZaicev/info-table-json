type ActionsType =
    ReturnType<typeof startTable>
    | ReturnType<typeof addTables>

const ADD_TABLES = 'ADD_TABLES'
const START_TABLE = 'START_TABLE'


const initialState: any = []


export const tablesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TABLES: {
            return {...state, tables: [...state.tables, action.newtable]}
        }
        case START_TABLE: {
            return {
                ...state,
                tables: action.table
            }
        }
        default:
            return state
    }
}

export const addTables = (newtable: any) => {
    return {type: ADD_TABLES, newtable}
}
export const startTable = (table:any) => {
    debugger
    return {type: START_TABLE, table}
}
type TableType = {
    columnsName: string;
    data: any;
    _id: any
}

// type ColumnsType = {
// date: string,
//     name: "Название",
//     quantity: "Количество(кг)",
//     distance: "Расстояние(км)",
//     column5: "SomeText 5", …}
// }
