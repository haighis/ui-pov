import React, {useState, useEffect} from 'react';
import { Button } from '@storybook/react/demo';
import DataGridField from '../components/DataGridField';
import Form from '@rjsf/core';

export default {
  title: 'Data Grid Field',
  component: Button,
};

const log = type => console.log.bind(console, type);

const schema = {
  title: 'AG Grid',
  type: 'object',
  properties: {
    aggrid: {
      mode: 'view'
    }
  },
};

const uiSchema = {
  aggrid: {
    "ui:field": "DataGrid"
  },
}

const formData = {
  
  aggrid: {
    title: 'Customer',
    columns: [
      {field: "id"},
      {field: "email"},
      {field: "first_name"},
      {field: "last_name"},
      {field: "avatar"},
    ],
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

const fields = {DataGrid: DataGridField}

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
          onSubmit={log('submitted')}
          onError={log('errors')}
        />
      </header>
    </div>
  );
}