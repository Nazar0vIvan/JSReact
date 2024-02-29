import { useState } from "react";

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
  const { children, label } = node;

  return (
    <div className="tree-node">
      <button
        onClick={children != null ? () => setIsOpen(!isOpen) : null}
        className="toggle-icon"
      >
        {children == null ? "*" : isOpen ? "⮝" : "⮟"}
      </button>
      <span>{label}</span>
      {isOpen && <TreeView data={children} />}
    </div>
  );
}
