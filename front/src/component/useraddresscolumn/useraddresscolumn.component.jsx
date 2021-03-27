import React from "react";

class AddressData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: null,
    };
  }

  async componentDidMount(props) {
    console.log("child state", this.props.value)
    let response = await fetch(`http://localhost:5000/users/${this.props.value}`);
    let data = await response.json();

    console.log("response ==>", data)
    // this.setState({ userdata : [data]})
    let addresslist = data.addresslist
    console.log("addresslist==>", addresslist)
    var addresslistnew;
    addresslist.forEach(element => {
      addresslistnew = element;
    });
    console.log("addreslistnew ==>", addresslistnew)
    this.setState({userdata : addresslist })


    return addresslistnew
  }

  render() {
      const value = this.state.userdata;
    return (
      <div>
        <div>
          { (value != null) ? value.map(data => (<div>
          <pre>Address Id :{data.id}</pre>
          <pre>Address :{data.address}</pre>
          <pre>City :{data.city}</pre>
          <pre>State :{data.state}</pre>
          <pre>Country :{data.country}</pre>
          <pre>ZipCode :{data.zipcode}</pre></div>)) : ""}
            
         </div>
      </div>
    );
  }
}
export default AddressData;
