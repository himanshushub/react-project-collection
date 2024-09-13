export default function GetFolderTree(props) {
  const {
    listFolders,
    selectedFolder,
    setSelectedFolder,
    handleCollapse,
    handleDelete,
  } = props;
  return (
    <div>
      {listFolders.map((folder, idx) => {
        return (
          <div
            key={folder.id}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedFolder(folder);
            }}
            style={{
              backgroundColor:
                selectedFolder.id === folder.id ? "darkturquoise" : "white",
              marginLeft: "30px",
            }}
          >
            <div style={{ display: "flex", gap: "2px" }}>
              {folder.isCollapsed && (
                <div
                  title="expand"
                  onClick={() => handleCollapse(folder, false)}
                >
                  ▶️
                </div>
              )}
              {!folder.isCollapsed && (
                <div
                  title="collapse"
                  onClick={() => handleCollapse(folder, true)}
                >
                  🔽
                </div>
              )}
              🗂️ {folder.name}{" "}
              <div title="delete" onClick={() => handleDelete(folder)}>
                🥤
              </div>
            </div>
            {!!folder.subFolder.length && !folder.isCollapsed && (
              <GetFolderTree
                listFolders={folder.subFolder}
                selectedFolder={selectedFolder}
                setSelectedFolder={setSelectedFolder}
                handleCollapse={handleCollapse}
                handleDelete={handleDelete}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
