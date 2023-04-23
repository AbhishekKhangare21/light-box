import "./styles.css";
import explorer from "./data/folderData";
import { useState } from "react";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";

const App = () => {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();
  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };
  return (
    <div className="App">
      <Folder explorer={explorerData} />
    </div>
  );
};

export default App;
