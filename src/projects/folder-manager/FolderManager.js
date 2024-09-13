import { useState } from "react";
import GetFolderTree from "./components/GetFolderTree";

export default function FolderManager() {
  const [inputVal, setInputVal] = useState("");
  const [selectedFolderId, setselectedFolderId] = useState("");
  const [listFolders, setlistFolders] = useState([]);
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div>
        <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
        <button
          onClick={() => {
            const folder = {
              id: new Date().valueOf().toString(),
              name: inputVal,
              subFolder: [],
            };
            if (selectedFolderId) {
              listFolders
                .find((folder) => folder.id === selectedFolderId)
                .subFolder.push(folder);
            } else if (inputVal) {
              listFolders.push(folder);
            }
            setlistFolders([...listFolders]);
          }}
        >
          Add Folder
        </button>
        <button onClick={() => console.log("input value", listFolders)}>
          Add File
        </button>
      </div>
      <GetFolderTree
        listFolders={listFolders}
        selectedFolderId={selectedFolderId}
        setselectedFolderId={setselectedFolderId}
      />
    </div>
  );
}
