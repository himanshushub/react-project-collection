export default function GetFolderTree(props) {
  const { listFolders, selectedFolder, setselectedFolder } = props;
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
              backgroundColor: selectedFolder.id === folder.id && "blueviolet",
            }}
          >
            <>🗂️{folder.name}</>
            {!!folder.subFolder.length && (
              <GetFolderTree
                listFolders={folder.subFolder}
                selectedFolder={selectedFolder}
                setselectedFolder={setselectedFolder}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
