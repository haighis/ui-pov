import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const DataTableView = (props) => {
    let {formData} = props;
    console.log('props ', props)

    //console.log('typeof props.formData.columns ', typeof props.formData.columns, props.formData.columns[0] )    

    return (
        <div className="ag-theme-balham" style={ {height: '500px', width: '100%'} }>
            DataTable Name: {props.formData.title}
            {props.formData.columns.map((name) => (
                <li>
                {name.field} - {name.DataType} - Js Type {typeof name.field}
                </li>
            ))}
            {/* <AgGridReact
                columnDefs={formData.columns}
                rowData={[]}
            /> */}
        </div>
    );

}

export default DataTableView;