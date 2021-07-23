import React, {ChangeEvent, useEffect} from 'react';
import './App.scss';
import fileJSON from "../src/data.json"
import {useDispatch, useSelector} from 'react-redux'
import {TableContainer} from "src/components";
import {AppRootStateType} from "src/store/store";
import {tableSelector} from "./selectors";
import {addTables, startTable} from "./store/tableReducer/actions";

const dataUrl = fileJSON;

export const App = () => {
  let json;

  const tablesStore = useSelector((state: AppRootStateType) => (
    tableSelector(state)
  ));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startTable(dataUrl));
  }, []);

  const handleFileSelect = (ev: ChangeEvent<HTMLInputElement>) => {
    const files = ev.target.files;

    if (files) {
      for (let i = 0, f; f = files[i]; i++) {
        const reader = new FileReader();

        reader.onload = ((theFile) => {
          return (ev: ProgressEvent<FileReader>) => {
            if (ev.target) {
              if (typeof ev.target.result === "string") {
                try {
                  json = JSON.parse(ev.target.result);
                  dispatch(addTables(json));
                } catch (ex) {
                  alert('ex when trying to parse json = ' + ex);
                }
              }
            }
          }
        })(f);
        reader.readAsText(f);
      }
    }
    return;
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          className="inputFile"
          type="file"
          name="JSON file"
          onChange={(ev: ChangeEvent<HTMLInputElement>) => handleFileSelect(ev)}
          accept=".json"
        />
      </header>
      {tablesStore && (
        <TableContainer dataUrl={tablesStore}/>
      )}
    </div>
  );
};
