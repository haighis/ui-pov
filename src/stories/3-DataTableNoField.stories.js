import React from 'react';
import { Button } from '@storybook/react/demo';
import Form from '@rjsf/core';

export default {
  title: 'DataTable without Field',
  component: Button,
};

const log = type => console.log.bind(console, type);

const schema = {
  
  title: 'DataTable',
  type: 'object',
  // required: ["lat", "lon", "title"],
  properties: {
    title: { title: 'Title', type: 'string' },
    // primaryKey: {
    //   title: 'Primary',
    // },
    columns: {
      type: 'array',
      title: 'Fields',
      items: {
        type: 'object',
        properties: {
          FieldName: { title: "Field Name", type: 'string', default: 'Col1' },
          DataType: { title: "Data Type", type: 'string', default: 'String' },
        },
      },
    },
  },
};

// 1. Basic Usage - This shows basic usage of DataTable Schema to act as a reference of DataTable jsconschema data shape.

export const BasicUsage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Form
          schema={schema}
          onChange={log('changed')}
          onSubmit={log('submitted')}
          onError={log('errors')}
        />
      </header>
    </div>
  );
};

function ObjectFieldTemplate(props) {
  return (
    <div>
      sample title - {props.title}<br/>
      sample desc - {props.description}
      <ul>
        <li> prop - {props.properties.map(element => <div className="property-wrapper">{element.content}</div>)}</li>
      </ul>
    </div>
  );
}

const uiSchemaOverride = {
  "ui:ObjectFieldTemplate": ObjectFieldTemplate
}

// 2. Render - ObjectFieldTemplateSample - Shows how to override rendering of DataTable

export const ObjectFieldTemplateSample = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Form
          schema={schema}
          uiSchema={uiSchemaOverride}
          onChange={log('changed')}
          onSubmit={log('submitted')}
          onError={log('errors')}
        />
      </header>
    </div>
  );
};

// 3. Edit Mode - 
