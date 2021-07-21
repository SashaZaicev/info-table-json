import React, {ChangeEvent, useEffect} from 'react';
import './App.scss';
import fileJSON from "../src/data.json"
import {useDispatch, useSelector} from 'react-redux'
import {addTables, startTable, TableType} from "./state/tablesReducer";
import TableContainer from "./Components/TableContainer";
import {AppRootStateType} from "./state/store";

const dataUrl = fileJSON

function App() {
    let tablesRender = useSelector<AppRootStateType, TableType[][]>((store) => store.tablePage.tables)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(startTable(dataUrl))
    }, [])
    let json

    function handleFileSelect(evt: ChangeEvent<HTMLInputElement>) {
        let files = evt.target.files;
        if(files) {
            for (let i = 0, f; f = files[i]; i++) {
                let reader = new FileReader();
                reader.onload = (function (theFile) {
                    return function (e: ProgressEvent<FileReader>) {
                        if(e.target) {
                            if (typeof e.target.result === "string") {
                                try {
                                    json = JSON.parse(e.target.result);
                                    dispatch(addTables(json))
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
        return
    }

    //console.log(tablesRender)
    return (
        <div className="App">
            <header className="App-header">
                <input className="inputFile"
                       type="file"
                       name='JSON file'
                       onChange={(e) => handleFileSelect(e)}
                       accept=".json"
                />
            </header>
            {tablesRender && <TableContainer dataUrl={tablesRender}/>}
        </div>
    );
}

export default App;
