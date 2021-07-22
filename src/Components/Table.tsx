import React from 'react';
import style from './Table.module.scss'
import {TableType} from "../state/tablesReducer";

type TablePropsTypes = {
    dataUrl: TableType[]
}

const Table: React.FC<TablePropsTypes> = ({dataUrl}) => {
    // entries
    const [firstDataItem] = dataUrl;
    const tableHeader = Object.entries(firstDataItem.columnsName).map((header, index) => {
        const titleHeader = header[1]
        return <th key={index + header[0]} className={style.headerT}>{titleHeader}</th>
    })
    const tableBody = firstDataItem.data.map((el) => {
            return <tr>
                {Object.values(el).map((value, index) => (
                    <td key={index + value}>{value}</td>
                ))}
            </tr>
        }
    )
    return (
        <div className={`${style.container} ${style.mtb3} ${style.tableResponsive} `}>
            <table className={`${style.table}`}>
                <thead className={`${style.sticky}`}>
                <tr>
                    {tableHeader}
                </tr>
                </thead>
                <tbody>
                {tableBody}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
