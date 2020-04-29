import React from 'react';
import { Button } from '@storybook/react/demo';
import { DataTableField } from '../components/DataTableField';
import { GeoPositionField } from '../components/GeoPositionField';
import Form from '@rjsf/core';

export default {
  title: 'DataTable Testing',
  component: Button,
};

const log = type => console.log.bind(console, type);

const schema = {
  title: 'DataTableField',
  type: 'object',
  // required: ["lat", "lon", "title"],
  properties: {
    title: { type: 'string' },
    // primaryKey: {
    //   title: 'Primary',
    // },
   
    lat: {type: "number"},
    lon: {type: "number"},
   
    // columns: {
    //   type: 'array',
    //   title: 'Fields',
    //   items: {
    //     type: 'object',
    //     properties: {
    //       FieldName: { title: "Field Name", type: 'string', default: 'Col1' },
    //       DataType: { title: "Data Type", type: 'string', default: 'String' },
    //     },
    //   },
    // },
  },
};

// Define the custom field component to use for the root object
const uiSchema = {
   
    "ui:field": "geo"
  
};

// Define the custom field components to register; here our "geo"
// custom field component
const fields = {geo: GeoPositionField};

export const Sample = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Form
        
        uiSchema={uiSchema}
        fields={fields}
          schema={schema}
          onChange={log('changed')}
          onSubmit={log('submitted')}
          onError={log('errors')}
        />
      </header>
    </div>
  );
};
