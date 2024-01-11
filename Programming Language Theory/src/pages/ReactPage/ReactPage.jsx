import React from "react";
import TreeView from "../../components/treeview/TreeView";
import ReactContents from "./react-contents";

function ReactPage() {
  return (
    <div>
      <h1>React Tree View</h1>
      <TreeView treeData={ReactContents} />
    </div>
  );
}

export default ReactPage;
