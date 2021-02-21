import React, { useState } from "react";
import "./List.css";
const List = ({ data }) => {
  return (
    <div className="list-view">
      <ul className="d-flex list-container  ">
        {data.map(list => (
          <TreeNode node={list} />
        ))}
      </ul>
      <button className="btn" type="submit">+Add {data.label}</button>
    </div>
  )
}

const TreeNode = ({ node }) => {
  const [childVisible, setChildVisibility] = useState(false);

  const hasChild = node.children ? true : false;
  return (
    <li>
      <div className="d-flex" onClick={e => setChildVisibility(v => !v)}>
        {hasChild && (
          <div className=" d-inline list-toggler">

          </div>
        )}
        <div className=" list-items">
          {node.label}
        </div>
      </div>
      {
        hasChild && childVisible &&
        <div className="list-content ">
          <input placeholder="Search" />
          <ul className="d-flex list-container" >
            <List data={node.children} />
          </ul>
        </div>
      }
    </li>
  )
}

export default List
