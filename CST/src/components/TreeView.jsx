import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowIcon from "./arrow.svg";
import FileIcon from "./file.svg";

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

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  function isChildren() {
    return children != null;
  }

  return (
    <div className="tree-node-wrapper">
      <div className="tree-node">
        <div
          className={`tree-node__mark ${
            isOpen ? "tree-node__mark_active" : ""
          }`}
        ></div>
        <Link
          className="tree-node__link"
          onClick={isChildren() ? toggleOpen : null}
        >
          <img
            className="tree-node__icon"
            src={isChildren() ? ArrowIcon : FileIcon}
          ></img>
          <div className="tree-node__text">{label}</div>
        </Link>
      </div>
      {isOpen && <TreeView data={children} />}
    </div>
  );
}
