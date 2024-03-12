import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowIcon from "./arrow.svg";
import FileIcon from "./file.svg";
import FolderIcon from "./folder.svg";

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
  const [isActive, setIsActive] = useState(false);
  const { children, label } = node;

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  function toggleActive() {
    setIsActive(!isActive);
  }

  function isChildren() {
    return children != null;
  }

  return (
    <div className="tree-node">
      <div className={`tree-node__active-mark ${isActive ? "show" : ""}`}></div>
      <Link
        className={`tree-node__link ${
          isActive ? "tree-node__link_active" : ""
        }`}
        onClick={isChildren() ? toggleOpen : toggleActive}
      >
        <img
          className="tree-node__icon"
          src={isChildren() ? ArrowIcon : ""}
          alt=" "
        ></img>
        <img
          className="tree-node__icon"
          src={isChildren() ? FolderIcon : FileIcon}
        ></img>
        <div className="tree-node__text">{label}</div>
      </Link>
      {isOpen && <TreeView data={children} />}
    </div>
  );
}
