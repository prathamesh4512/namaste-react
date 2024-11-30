import React from "react"; // importing from react folder in node modules
import ReactDOM from "react-dom/client"; // importing from react-dom folder in node modules

const Heading = React.createElement(
  "h1",
  { id: "heading", temp: "xyz" },
  "Hello Word"
);
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(Heading)

console.log(Heading);

/**
 * <div id="container">
 * <h1 id="title" style={background:"red"}>heading</h1>
 * <h1 id="title">heading1</h1>
 * </div>
 *
 */

/*
*
*
*
*
*
*
*/

// Create nested React Elements
const heading = React.createElement(
  "h1",
  {
    id: "title",
    style: {
      background: "red",
    },
    className: "title",
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

// Element
const containerE = (
  <div>
    <h1>hello world</h1>
  </div>
);

// Functional Component
const ContainerC = (props) => {
  const {name} = props;
  let obj = {}
  return (
    <div className="hello">
      {console.log("hello")}  {/*nothing will be shown on browser, hello will be printed on console*/}
      {10+20}    {/* 30 */}
      <h1>{obj.name}</h1> 
      <h2>hello</h2>
    </div>
  );
};

<img src={`wwewewewew${dsds}`}/>

root.render(<ContainerC/>)


const AppLayout = () => {
  return (<div className="app">
      <Header/>
      <Body/>
  </div>)
}

