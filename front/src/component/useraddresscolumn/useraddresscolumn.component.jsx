import React from "react";

class AddressData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: [],
    };
  }

  async componentDidMount(props) {
    console.log("child state",this.props.value)
    let response = await fetch(`http://localhost:5000/users/${this.props.value}`);
    let data = await response.json();
    
    console.log("response ==>",data)
    this.setState({ userdata : data.addresslist })

    
  }

  render() {
    const value = this.props.value;
    // const value2 = this.state.userdata;
    return (
      <div>
        {value}
      </div>
    );
  }
}
export default AddressData;
