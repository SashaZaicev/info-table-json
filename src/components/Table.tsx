import React, {
  ChangeEvent, ChangeEventHandler,
  FC,
  ReactNode, SyntheticEvent,
  useEffect,
  useRef,
  useState
} from 'react';
import style from './style/table.module.scss'
import {generateKey} from "src/helpers";
import {PropsType} from "./types";

export const Table: FC<PropsType> = ({dataUrl}) => {
  const [firstDataItem] = dataUrl;
  const headRef = useRef<HTMLTableSectionElement>(null)
  const [top, setTop] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  const handleScroll = (event: Event) => {
    const ref = headRef
    // @ts-ignore
    const target = event.currentTarget.scrollY
    if (ref.current &&
      ref.current.parentElement
      && ref.current.parentElement.offsetTop < target
      && ref.current.parentElement.offsetTop
      + ref.current.parentElement.offsetHeight
      - ref.current.clientHeight > target) {
      setTop(target - ref.current.parentElement.offsetTop)
    }
  }
  const tableHeader = Object.entries(firstDataItem.columnsName).map(
    ([key, value], index) => (
      <th
        key={generateKey(index)}
        className={`${style.headerT} ${style.sticky}`}>
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
        <thead ref={headRef} style={{top: top}}>
        <tr>{tableHeader}</tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  );
};
