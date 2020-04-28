import React from 'react';
import { Button } from '@storybook/react/demo';
import { DataTableField } from '../components/DataTableField';
import Form from '@rjsf/core';

export default {
  title: 'DataTable Field',
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

export const Sample = () => {
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
