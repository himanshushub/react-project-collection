import { useState } from "react";
import GetFolderTree from "./components/GetFolderTree";

export default function FolderManager() {
  const [inputVal, setInputVal] = useState("");
  const [selectedFolder, setSelectedFolder] = useState({});
  const [listFolders, setListFolders] = useState([]);

  const handleCollapse = (folder, collapse) => {
    folder.isCollapsed = collapse;
    setListFolders([...listFolders]);
  };

  const handleDelete = (folder) => {
    const folderStr = JSON.stringify(folder);
    const dummyStr = JSON.stringify(listFolders);
    let finalStr = dummyStr.replace(folderStr, "");

    // if deleted from middle
    finalStr = finalStr.replace(",,", ",");
    // if deleted from start
    finalStr = finalStr.replace("[,", "[");
    // if deleted from end
    finalStr = finalStr.replace(",]", "]");

    setListFolders(JSON.parse(finalStr));
  };

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
              isCollapsed: false,
            };
            if (selectedFolder.id) {
              selectedFolder.subFolder.push(folder);
            } else if (inputVal) {
              listFolders.push(folder);
            }
            setListFolders([...listFolders]);
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
        selectedFolder={selectedFolder}
        setSelectedFolder={setSelectedFolder}
        handleCollapse={handleCollapse}
        handleDelete={handleDelete}
      />
    </div>
  );
}
