import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setShowInput({
      visible: true,
      isFolder: isFolder,
    });
  };
  const onAddFolder = (e) => {
    if (e.keyCode == 13 && e.target.value) {
      //add logic
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder)
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📂{explorer.name}</span>

          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 20 }}>
          {showInput.visible && (
            <div className="InputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                autoFocus
                onKeyDown={onAddFolder}
                className="inputContainer_input"
              />
            </div>
          )}
          {explorer.items.map((exp) => {
            return <Folder key={exp.id} explorer={exp} />;
          })}
        </div>
      </div>
    );
  else {
    return <span className="file">📄{explorer.name}</span>;
  }
};

export default Folder;
