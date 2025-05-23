import React from "react";
import styles from "./BinaryTree.module.css";

const dummyTree = {
  name: "You",
  children: [
    {
      name: "Left",
      children: [
        { name: "Left-Left" },
        { name: "Left-Right" },
      ],
    },
    {
      name: "Right",
      children: [
        { name: "Right-Left" },
        { name: "Right-Right" },
      ],
    },
  ],
};

const renderNode = (node) => {
  return (
    <div className={styles.nodeContainer}>
      <div className={styles.node}>{node.name}</div>
      {node.children && (
        <div className={styles.children}>
          {node.children.map((child, i) => (
            <div key={i} className={styles.childNode}>
              {renderNode(child)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const BinaryTree = () => {
  return (
    <div className={styles.treeWrapper}>
      <h2>🌳 Binary Tree Structure</h2>
      <div className={styles.tree}>{renderNode(dummyTree)}</div>
    </div>
  );
};

export default BinaryTree;
