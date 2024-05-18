import React from "react";
import ReactDOM from "react-dom/client";

//React element
const heading= (<h1 className="head">
   React using JSX --react element
   </h1>);



//React Components

const Heading2=()=> (
   <h1 className="head2">
   React using JSX --react component
   </h1>);

const HeadingComponent = () =>(
   <div id= "container">
      <Heading2/>
      <h1 className="heading">
         Hello React from React component
      </h1>

   </div>
)
 
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);