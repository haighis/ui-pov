import logo from './logo.svg';
import './App.css';

import React, { Component } from "react";
import { render } from "react-dom";
import GeoPositionField from "./components/GeoPositionField";
import DataTableField from './components/DataTableField/';

import Form from "@rjsf/core";

const log = (type) => console.log.bind(console, type);

const schema = {
  title: "Todo",
  type: "object",
  required: ["lat", "lon", "title"],
  properties: {
     lat: {type: "number"},
     lon: {type: "number"},
    title: {type: "string", title: "Title", default: "A new task"},
    done: {type: "boolean", title: "Done?", default: false}
  }
};

// const schema = {
//   title: "Todo",
//   type: "object",
//   required: ["title"],
//   properties: {
//     title: {type: "string", title: "Title", default: "A new task"},
//     done: {type: "boolean", title: "Done?", default: false}
//   }
// };

// Define the custom field component to use for the root object
const uiSchema = {
  description: {
    "ui:field": "geo"
  }
};

const fields = {geo: GeoPositionField, dataTable: DataTableField};

// Define the custom field components to register; here our "geo"
// custom field component


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form schema={schema}
        uiSchema={uiSchema}
        fields={fields}
          onChange={log("changed")}
          onSubmit={log("submitted")}
          onError={log("errors")} />
      </header>
    </div>
  );
}

export default App;
