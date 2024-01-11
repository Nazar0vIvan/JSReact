import React from "react";
import TreeNode from "../treenode/TreeNode";

function TreeView({ treeData }) {
  return (
    <ul>
      {treeData.map((node) => (
        <TreeNode
          node={node}
          key={node.key}
        />
      ))}
    </ul>
  );
}

export default TreeView;
