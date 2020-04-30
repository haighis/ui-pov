import React, {useState, useEffect} from 'react';
import { Button } from '@storybook/react/demo';
import DataGridField from '../components/DataGridField';
import Form from '@rjsf/core';

export default {
  title: 'Data Grid Field with DataTable',
  component: Button,
};

const log = type => console.log.bind(console, type);

let schema = {
  title: 'AG Grid',
  type: 'object',
  properties: {
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
    aggrid: {
      columns: {
        '$ref': '#/properties/aggrid/data',
      },
      data: [],
    },
  },
};

const uiSchema = {
  aggrid: {
    "ui:field": "DataGrid"
  },
}

const formData = {
  title: "JohnTable",
  columns: [
    { FieldName: "Col1", DataType: "String" },
    { FieldName: "Col2", DataType: "String" },
    { FieldName: "Col3", DataType: "String" },
    { FieldName: "Col4", DataType: "String" },
  ],
  aggrid: {
    title: 'Customer',
    data: [
      {
          "id": 7,
          "email": "michael.lawson@reqres.in",
          "first_name": "Michael",
          "last_name": "Lawson",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
      },
      {
          "id": 8,
          "email": "lindsay.ferguson@reqres.in",
          "first_name": "Lindsay",
          "last_name": "Ferguson",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
      },
      {
          "id": 9,
          "email": "tobias.funke@reqres.in",
          "first_name": "Tobias",
          "last_name": "Funke",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
      },
      {
          "id": 10,
          "email": "byron.fields@reqres.in",
          "first_name": "Byron",
          "last_name": "Fields",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
      },
      {
          "id": 11,
          "email": "george.edwards@reqres.in",
          "first_name": "George",
          "last_name": "Edwards",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
      },
      {
          "id": 12,
          "email": "rachel.howell@reqres.in",
          "first_name": "Rachel",
          "last_name": "Howell",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
      }
  ],
  }
}

const fields = {DataGrid: DataGridField};

// const [columns, setColumns] = useState([]);

const onSubmit = (props) => {
  schema.properties.aggrid.data = props.formData.columns;
  console.log(schema);
}

export const AGGrid = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Form
          schema={schema}
          uiSchema={uiSchema}
          formData={formData}
          fields={fields}
          onChange={log('changed')}
          onSubmit={onSubmit}
          onError={log('errors')}
        />
      </header>
    </div>
  );
}