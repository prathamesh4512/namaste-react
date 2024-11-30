import React from "react";  // importing from react folder in node modules
import ReactDOM from "react-dom";// importing from react-dom folder in node modules

const Heading = React.createElement("h1",{id:"heading", temp:"xyz"},"Hello Word")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(Heading)

console.log(Heading)

/**
 * <div id="container">
 * <h1 id="title" style={background:"red"}>heading</h1>
 * <h1 id="title">heading1</h1>
 * </div>
 * 
 */

// Create nested React Elements
const heading = React.createElement(
    "h1",
    {
      id: "title",
      style: {
        background:"red",
      },
      className:"title"
    },
    "heading"
  );
  const heading1 = React.createElement(
    "h1",
    {
      id: "title",
    },
    "heading1"
  );
  
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading, heading1]
  );

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container)
