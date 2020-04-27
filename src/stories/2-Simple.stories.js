import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Simple Field',
  component: Button,
};

// export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

// export const Emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );

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