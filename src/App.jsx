import { useState } from "react";
import explorer from "./data/folderData";
import Folder from "./components/folder";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  return (
    <>
      <Folder explorer={explorerData} />
    </>
  );
}

export default App;
