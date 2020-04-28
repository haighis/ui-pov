import React from "react";

// Define DataTableField
class DataTableField extends React.Component {
    constructor(props) {
      super(props);
      this.state = {...props.formData};
    }
  
    onChange(name) {
      return (event) => {
        this.setState({
          [name]: parseFloat(event.target.value)
        }, () => this.props.onChange(this.state));
      };
    }
  
    render() {
      const {title} = this.state;
      return (
        <div>
          <input type="text" value={title} onChange={this.onChange("title")} />
        </div>
      );
    }
  }

  export default DataTableField;