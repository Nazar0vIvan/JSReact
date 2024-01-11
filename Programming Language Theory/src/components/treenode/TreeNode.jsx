import React from "react";

function TreeNode({ node }) {
  const { children, label } = node;

  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };
  return (
    <>
      <div onClick={handleClick} style={{ marginBottom: "10px" }}>
        <span>{label}</span>
      </div>
      <ul>{showChildren && <Tree treeData={children} />}</ul>
    </>
  );
}

export default TreeNode;
