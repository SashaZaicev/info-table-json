import React from 'react';
import Table from "./Table";
import {TableType} from "../state/tablesReducer";

type TableContainerType = {
    dataUrl: TableType[][]
}

const TableContainer: React.FC<TableContainerType> = ({dataUrl}) => {
    const mapped = dataUrl.map((el) => <Table dataUrl={el}/>)
    return (
        <>{mapped}</>
    );
};

export default TableContainer;
