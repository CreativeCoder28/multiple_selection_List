import React, { useState } from "react";
import "./List.css";

/**
 * List component for a tree view structure of multi level multi select list item
 * 
 */
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


/**
 * this is the recursive list component which checks the given data to have child 
 * for rendering the multievel list view
 * 
 */

const TreeNode = ({ isChecked, node, handleChange }) => {
  const [childVisible, setChildVisibility] = useState(false);

  const hasChild = node.children ? true : false;

  return (
    <li>
      <div className="d-flex" onClick={e => setChildVisibility(v => !v)}>
        <div className=" list-items" >
          <label>{node.label}</label>
          <input className="checkbox" checked={isChecked} type="checkbox"
          />
        </div>
      </div>
      {
        hasChild && childVisible &&
        <div className="list-child " >
          <a>{node.header}</a>
          <div className="list-content ">
            <input className="searchbox" placeholder="Search" />
            <List data={node.children} />
          </div>
        </div>
      }
    </li>
  )
}

export default List
