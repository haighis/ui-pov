import React, { useState, useEffect } from 'react';
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
    //dataTable: {
      title: { type: 'string' },
      columns: {
        type: 'array',
        title: 'Fields',
        items: {
          type: 'object',
          properties: {
            FieldName: { title: 'Field Name', type: 'string', default: 'Col1' },
            DataType: { title: 'Data Type', type: 'string', default: 'String' },
          },
        },
      },
    //},
    // DataTableEditor: {
    //   mode: 'edit',
    //   schema: {
    //     type: 'object',
    //     properties: {
    //     }
    //   }
    // }
  },
};

const schemaView = {
  title: 'DataTableField',
  type: 'object',
  properties: {
    dataTable: {
      mode: 'view',
    },
  },
};

const uiSchema = {
  dataTable: {
    'ui:field': 'DataTable',
  },
};

const fields = { DataTable: DataTableField };

// //getter and setter for formData
// const [formData, setFormData] = useState({});
// //function to monitor changes in formData
// useEffect(() => {
//   log(formData);
// }, [formData]);

export const EditMode = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Form
          schema={schemaEdit}
          uiSchema={uiSchema}
          // formData={formData}
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
  const formData = {
    DataTableEditor: {
      title: 'Customer',
      columns: [
        { field: 'Col1', DataType: 'String' },
        { field: 'Col2', DataType: 'String' },
      ],
    },
  };
  return (
    <div className="App">
      <header className="App-header">
        <Form
          schema={schemaView}
          uiSchema={uiSchema}
          formData={formData}
          fields={fields}
          onChange={log('changed')}
          onSubmit={log('submitted')}
          onError={log('errors')}
        />
      </header>
    </div>
  );
};
