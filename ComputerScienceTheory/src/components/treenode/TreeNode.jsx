import React from "react";
import { useState } from "react";
import TreeView from "../treeview/TreeView";

function TreeNode({ node }) {
  const { children, label } = node;

  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };
  return (
    <>
      <div
        onClick={handleClick}
        style={{ marginBottom: "10px" }}
      >
        <span>{label}</span>
      </div>
      <ul>{showChildren && <TreeView treeData={children} />}</ul>
    </>
  );
}

export default TreeNode;
