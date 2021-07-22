import {FC} from 'react';
import {generateKey} from "src/helpers";
import {Table} from "src/components";
import {PropsType} from "./types";


export const TableContainer: FC<PropsType> = ({dataUrl}) => {
  const mapped = dataUrl.map((tables, index) => (
    <Table
      dataUrl={tables}
      key={generateKey(index)}
    />
  ));

  return <>{mapped}</>;
};
