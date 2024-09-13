export default function GetFolderTree(props) {
  const { listFolders, selectedFolder, setselectedFolder, handleCollapse } =
    props;
  return (
    <div>
      {listFolders.map((folder, idx) => {
        return (
          <div
            key={folder.id}
            onClick={(e) => {
              e.stopPropagation();
              setselectedFolder(folder);
            }}
            style={{
              backgroundColor:
                selectedFolder.id === folder.id ? "darkturquoise" : "white",
              marginLeft: "30px",
            }}
          >
            <div style={{ display: "flex", gap: "2px" }}>
              {folder.isCollapsed && (
                <div onClick={() => handleCollapse(folder, false)}>🔼</div>
              )}
              {!folder.isCollapsed && (
                <div onClick={() => handleCollapse(folder, true)}>🔽</div>
              )}
              🗂️ {folder.name}
            </div>
            {!!folder.subFolder.length && !folder.isCollapsed && (
              <GetFolderTree
                listFolders={folder.subFolder}
                selectedFolder={selectedFolder}
                setselectedFolder={setselectedFolder}
                handleCollapse={handleCollapse}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
