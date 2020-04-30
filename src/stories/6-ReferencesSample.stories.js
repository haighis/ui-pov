import React from 'react';
import Form from '@rjsf/core';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Reference Sample',
  component: Button,
};

const log = type => console.log.bind(console, type);

const schema = {
  "definitions": {
    "address": {
      "type": "object",
      "properties": {
        "street_address": {
          "type": "string"
        },
        "city": {
          "type": "string"
        },
        "state": {
          "type": "string"
        }
      },
      "required": [
        "street_address",
        "city",
        "state"
      ]
    },
    "node": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "children": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/node"
          }
        }
      }
    }
  },
  "type": "object",
  "properties": {
    "billing_address": {
      "title": "Billing address",
      "$ref": "#/definitions/address"
    },
    "shipping_address": {
      "title": "Shipping address",
      "$ref": "#/definitions/address"
    },
    "tree": {
      "title": "Recursive references",
      "$ref": "#/definitions/node"
    }
  }
}

let uiSchema = {
  "firstName": {
    "ui:autofocus": true,
    "ui:emptyValue": "",
    "ui:autocomplete": "family-name"
  },
  "lastName": {
    "ui:emptyValue": "",
    "ui:autocomplete": "given-name"
  },
  "age": {
    "ui:widget": "updown",
    "ui:title": "Age of person",
    "ui:description": "(earthian year)"
  },
  "bio": {
    "ui:widget": "textarea"
  },
  "password": {
    "ui:widget": "password",
    "ui:help": "Hint: Make it strong!"
  },
  "date": {
    "ui:widget": "alt-datetime"
  },
  "telephone": {
    "ui:options": {
      "inputType": "tel"
    }
  }
}

let formData = {
  "firstName": "Chuck",
  "lastName": "Norris",
  "age": 75,
  "bio": "Roundhouse kicking asses since 1940",
  "password": "noneed"
}


export const ReferenceSample = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Form
          schema={schema}
          uiSchema={uiSchema}
          formData={formData}
          onChange={log('changed')}
          onSubmit={log('submitted')}
          onError={log('errors')}
        />
      </header>
    </div>
  );
}