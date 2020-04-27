import logo from './logo.svg';
import './App.css';

import React, { Component } from "react";
import { render } from "react-dom";

import Form from "@rjsf/core";

// const schema = {
//   title: "Todo",
//   type: "object",
//   required: ["title"],
//   properties: {
//     title: {type: "string", title: "Title", default: "A new task"},
//     done: {type: "boolean", title: "Done?", default: false}
//   }
// };

const log = (type) => console.log.bind(console, type);

// Define a custom component for handling the root position object
class GeoPosition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...props.formData};
  }

  onChange(name) {
    return (event) => {
      this.setState({
        [name]: parseFloat(event.target.value)
      }, () => this.props.onChange(this.state));
    };
  }

  render() {
    const {lat, lon} = this.state;
    return (
      <div>
        <input type="number" value={lat} onChange={this.onChange("lat")} />
        <input type="number" value={lon} onChange={this.onChange("lon")} />
      </div>
    );
  }
}

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

// Define the custom field components to register; here our "geo"
// custom field component
const fields = {geo: GeoPosition};

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
