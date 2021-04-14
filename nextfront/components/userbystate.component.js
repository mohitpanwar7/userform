import React from "react";
import { DropdownButton, Dropdown, Button, Form } from "react-bootstrap";
import Link from 'next/link';
// import './userbystate.styles.css';
import { withRouter } from 'next/router'
// import { WithRouterProps } from 'next/dist/client/with-router';
// const router = withRouter();
       



class StateSelect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            states: [],
            users: null,
            selectedstatename: null,
            selectedstateid: null
        }
    }

    statefetch = (countryid) => {
        fetch(`/api/country/${countryid}`)
            .then((response) => response.json())
            .then(data => {
                this.setState({ states: data });
            });

    }

    statedown(value) {

        console.log("statedown --> ", value)

        if (value === "India") {
            this.statefetch(1);
            console.log("this.state", this.state.states)
        } else if (value === "Usa") {
            this.statefetch(2);
            console.log("this.state", this.state.states)
        } else if (value == "") {
            this.setState({ states: null })
        }
    }
    statedropdown(value) {
        if (value != "") {
            const statedata = value.split(",")
            const statename = statedata[0]
            const stateid = statedata[1]
            fetch(`/api/users/state/${stateid}`)
                .then((response) => response.json())
                .then(data => {
                    this.setState({ users: data });
                });
            this.setState({ selectedstatename: statename })
            this.setState({ selectedstateid: stateid })

        } else {
            this.setState({ selectedstatename: null })
            this.setState({ selectedstateid: null })
        }

    }
    // handleClick = (e) => {
    //     const router = useRouter()
    //     e.preventDefault()
    //     router.push()
    // }

    

    render() {
        // const ButtonLink = React.forwardRef(({ onClick, href , ref}) => {
        //     return (
        //         <a href={href} onClick={onClick} ref={this.state.selectedstateid}>
        //             {ref}
        //         </a>
        //     )
        // })
        const { router } = this.props;
         return (
            <div className="main-div">
                <fieldset>

                    <div className="row mx-0">
                        <Form.Group className="col-md-4">
                            <Form.Label>Country</Form.Label>
                            <Form.Control as="select" onChange={(e) => this.statedown(e.target.value)} required>
                                <option value="">---Select Country---</option>
                                <option value="India">India</option>
                                <option value="Usa">Usa</option>

                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="col-md-4">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" onChange={(event) => this.statedropdown(event.target.value)} required>
                                <option value="">---Select State---</option>
                                {/* { if (this.state.states != null){
                                this.state.states.map(state => (
                                    <option key={state.id} value={[[state.statename], [state.id]]}>{state.statename}</option>
                                ))}
                        } */}
                                {(this.state.states != null) ? (this.state.states.map(state => (<option key={state.id} value={[[state.statename], [state.id]]}>{state.statename}</option>))) : ""}

                            </Form.Control>

                        </Form.Group>
                        {console.log("users: ==>", this.state.users)}
                        {(this.state.users != "Users Not Found" && this.state.users != null) ? (<div><Form.Group className="col-md-4"><Form.Label>Selected State : <span style={{ color: "blue" }}>{this.state.selectedstatename}</span> </Form.Label ><Button variant="info" size="sm" onClick={() => {router.push({ pathname: '/usersbystateid/[stateid]', query: {stateid: this.state.selectedstateid} })}}>Search Users</Button></Form.Group></div>) : ""}
                        {/* {(this.state.users != "Users Not Found" && this.state.users != null) ? (<div><Form.Group className="col-md-4"><Form.Label>Selected State : <span style={{ color: "blue" }}>{this.state.selectedstatename}</span> </Form.Label><Link href="/users" ref={this.state.selectedstateid} passHref>
                        <Button variant="info" size="sm">Search Users {this.state.selectedstateid}</Button>
                        </Link></Form.Group></div>) : ""} */}

                    </div>

                </fieldset>
            </div>
        )
    }
}

export default withRouter(StateSelect);