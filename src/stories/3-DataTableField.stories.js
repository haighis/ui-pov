import React from 'react';
import { Button } from '@storybook/react/demo';
import DataTableField from '../components/DataTableField/';
import Form from '@rjsf/core';

export default {
  title: 'DataTable Field',
  component: Button,
};

const log = type => console.log.bind(console, type);

const schemaEdit = {
  title: 'DataTableField',
  type: 'object',
  // required: ["lat", "lon", "title"],
  properties: {
    DataTableEditor: {
      mode: 'edit',
      schema: {
        type: 'object',
        properties: {
          title: { type: 'string' },
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
        }
      }
    }
  },
};

const schemaView = {
  title: 'DataTableField',
  type: 'object',
  properties: {
    DataTableEditor: {
      mode: 'view'
    }
  },
};

const uiSchema = {
  DataTableEditor: {
    "ui:field": "DataTable"
  },
}

const fields = {DataTable: DataTableField}

export const EditMode = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Form
          schema={schemaEdit}
          uiSchema={uiSchema}
          fields={fields}
          onChange={log('changed')}
          onSubmit={log('submitted')}
          onError={log('errors')}
        />
      </header>
    </div>
  );
};

export const ViewMode = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Form
          schema={schemaView}
          uiSchema={uiSchema}
          fields={fields}
          onChange={log('changed')}
          onSubmit={log('submitted')}
          onError={log('errors')}
        />
      </header>
    </div>
  );
}
