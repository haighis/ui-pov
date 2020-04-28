import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { GeoPositionField } from '../components/GeoPositionField';
import Form from "@rjsf/core";

export default {
  title: 'Simple Field',
  component: Button,
};

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

// Define the custom field component to use for the root object
const uiSchema = {
  description: {
    "ui:field": "geo"
  }
};

// Define the custom field components to register; here our "geo"
// custom field component
const fields = {geo: GeoPositionField};

export const Test = () => {
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