import React, {Fragment} from "react";
import Form from "@rjsf/core";

// Define DataTableEdit
// class DataTableEdit extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {...props.formData};
//     }
  
//     onChange(name) {
//       return (event) => {
//         this.setState({
//           [name]: parseFloat(event.target.value)
//         }, () => this.props.onChange(this.state));
//       };
//     }
  
//     render() {
//       const {title} = this.state;
//       return (
//         <div>
//           <input type="text" value={title} onChange={this.onChange("title")} />
//         </div>
//       );
//     }
//   }

//   export default DataTableEdit;

//This is temporary, in the future we should not use Form here
//Instead we should read the columns property and render inputs
const DataTableEdit = (props) => {
    let {schema, formData} = props;
    return (
        <Fragment>
            <Form
                schema={schema.schema}
                formData={formData}
            ><button style={{display: 'none'}}/></Form>
        </Fragment>
    )
}

export default DataTableEdit;