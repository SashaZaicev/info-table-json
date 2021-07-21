import React from 'react';
import Table2 from "./Table2";

const TableContainer: React.FC<any> = ({dataUrl}):any => {
    return (
        dataUrl.map((el:any)=>{
            return (
                <Table2 dataUrl={el}/>
            )})
    );
};

export default TableContainer;
