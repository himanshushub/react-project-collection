import { useState } from "react";

export default function FolderManager() {
  const [inputVal, setInputVal] = useState("");
  const [listFolders, setlistFolders] = useState([]);
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div>
        <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
        <button
          onClick={() => {
            if (inputVal) setlistFolders([...listFolders, inputVal]);
          }}
        >
          Add Folder
        </button>
        <button onClick={() => console.log("input value", listFolders.length)}>
          Add File
        </button>
      </div>
      <div>
        {listFolders.map((folder, idx) => {
          return <div key={folder + idx}>🗂️{folder}</div>;
        })}
      </div>
    </div>
  );
}
