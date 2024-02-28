import React, { useState } from "react";

export function TreeView({ data }) {
  return (
    <div className="tree-view">
      {data.map((node) => (
        <TreeNode key={node.key} node={node} />
      ))}
    </div>
  );
}

function TreeNode({ node }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNode = () => setIsOpen(!isOpen);

  const { children, label } = node;

  return (
    <div className="tree-node">
      {children && (
        <button onClick={toggleNode} className="toggle-icon">
          {isOpen ? "⮝" : "⮟"}
        </button>
      )}
      <span>{label}</span>
      {isOpen && <TreeView data={children} />}
    </div>
  );
}
