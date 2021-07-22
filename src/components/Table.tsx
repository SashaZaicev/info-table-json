import {FC} from 'react';
import style from './style/table.module.scss'
import {generateKey} from "src/helpers";
import {PropsType} from "./types";

export const Table: FC<PropsType> = ({dataUrl}) => {
  const [firstDataItem] = dataUrl;

  const tableHeader = Object.entries(firstDataItem.columnsName).map(
    ([key, value], index) => (
      <th
        key={generateKey(index)}
        className={style.headerT}>
        {value}
      </th>
    )
  );
  const tableBody = firstDataItem.data.map((el, index) => (
    <tr
      key={generateKey(index)}>
      {Object.values(el).map(
        (value, index) => (
          <td key={generateKey(index)}>
            {value}
          </td>
        ))}
    </tr>
    )
  );

  return (
    <div className={
      `${style.container} ${style.mtb3} ${style.tableResponsive}`
    }>
      <table className={`${style.table}`}>
        <thead className={`${style.sticky}`}>
          <tr>{tableHeader}</tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  );
};
