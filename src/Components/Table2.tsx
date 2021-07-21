import React from 'react';
import style from './Table.module.scss'

export type TableTypes = {
    dataUrl: Array<any>
}


const Table2: React.FC<any> = ({dataUrl}) => {
    const firstObj = dataUrl.length ? dataUrl[0] : dataUrl;
    const tableHeader = Object.keys(firstObj.columnsName).map((header: any, index) => {
        return <th key={index + header} className={style.headerT}>{header}</th>
    })
    const tableBody = firstObj.data.map((el: any) => {
            return <tr>
                {Object.values(el).map((value: any, index) => (
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

export default Table2;
