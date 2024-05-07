import { useState } from "react";
import explorer from "./data/folderData";
import Folder from "./components/folder";
import useTraverse from "./hooks/useTraverse";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode } = useTraverse();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <>
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </>
  );
}

export default App;
