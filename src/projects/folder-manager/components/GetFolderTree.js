export default function GetFolderTree(props) {
  const { listFolders, selectedFolderId, setselectedFolderId } = props;
  return (
    <div>
      {listFolders.map((folder, idx) => {
        return (
          <div
            key={folder.id}
            onClick={() => setselectedFolderId(folder.id)}
            style={{
              backgroundColor: selectedFolderId === folder.id && "blueviolet",
            }}
          >
            <>🗂️{folder.name}</>
            {!!folder.subFolder.length && (
              <GetFolderTree
                listFolders={folder.subFolder}
                selectedFolderId={selectedFolderId}
                setselectedFolderId={setselectedFolderId}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
