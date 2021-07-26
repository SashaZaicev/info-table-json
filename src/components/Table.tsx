import React, {
  FC,
  useEffect,
  useRef,
  useState
} from 'react';
import style from './style/table.module.scss'
import {PropsType} from "./types";

export const Table: FC<PropsType> = React.memo(({dataUrl}) => {
  const [firstDataItem] = dataUrl;
  const headRef = useRef<HTMLTableSectionElement>(null)
  const [topHeader, setTop] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  const handleScroll = () => {
    const ref = headRef
    const target = window.scrollY
    if (ref.current &&
      ref.current.parentElement
      && ref.current.parentElement.offsetTop < target
      && ref.current.parentElement.offsetTop
      + ref.current.parentElement.offsetHeight
      - ref.current.clientHeight > target) {
      setTop(target - ref.current.parentElement.offsetTop)
    } else if (ref.current &&
      ref.current.parentElement
      && ref.current.parentElement.offsetTop > target) {
      setTop(0)
    }
  }
  const tableHeader = Object.entries(firstDataItem.columnsName).map(
    ([key, value], index) => (
      <th
        key={index + value}
        className={`${style.headerT} ${style.sticky}`}>
        {value}
      </th>
    )
  );
  const tableBody = firstDataItem.data.map((el, index) => (
      <tr
        key={index + el.name}>
        {Object.values(el).map(
          (value, index) => (
            <td key={index + value}>
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
        <thead ref={headRef} style={{top: topHeader}}>
        <tr>{tableHeader}</tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  );
});
