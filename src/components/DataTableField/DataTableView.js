import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const DataTableView = (props) => {
    let { columns, formData } = props;
    return (
        <div className="ag-theme-balham" style={ {height: '500px', width: '100%'} }>
            <AgGridReact
                columnDefs={columns}
                rowData={formData}>
            </AgGridReact>
      </div>
    );

}

export default DataTableView;