import React, {FC} from 'react';
import {Table} from "src/components";
import {PropsType} from "./types";


export const TableContainer: FC<PropsType> = React.memo(({dataUrl}) => {
  const mapped = dataUrl.map((tables, index) => (
    <Table
      dataUrl={tables}
      key={tables.length + index}
    />
  ));

  return <>{mapped}</>;
});
