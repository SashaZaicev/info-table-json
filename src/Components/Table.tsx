import React from 'react';
import style from './Table.module.scss'
import {TableType} from "../state/tablesReducer";

type TablePropsTypes = {
    dataUrl: TableType[]
    length?: number
}


const Table: React.FC<any> = ({dataUrl}) => {
    // entries
    const firstObj = dataUrl.length ? dataUrl[0] : dataUrl;
    const tableHeader = Object.keys(firstObj.columnsName).map((header: string, index) => {
        return <th key={index + header} className={style.headerT}>{header}</th>
    })
    const tableBody = firstObj.data.map((el: Object) => {
            return <tr>
                {Object.values(el).map((value: string, index) => (
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
