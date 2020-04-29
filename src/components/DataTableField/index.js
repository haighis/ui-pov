import React from 'react';
import DataTableEdit from './DataTableEdit';
import DataTableView from './DataTableView';

const DataTableField = (props) => {
    let {schema} = props;
    console.log(props);
    if (schema.mode === 'edit') {
        return <DataTableEdit {...props} />;
    } else {
        return <DataTableView {...props} />;
    }
}

export default DataTableField;