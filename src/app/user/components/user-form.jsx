import React, { Component } from 'react';
import User from '../../shared/models/user-model';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class UserForm extends Component {
    userForm = undefined;

    constructor(props) {
        super(props);

        this.state = {
            isVisible: props.isVisible,
            userId: 4,
            textFieldValue: ''

        }

        this.createUser = this.createUser.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ isVisible: nextProps.isVisible });
    }

    createUser() {

        const input = this.state.textFieldValue;
        const id = this.state.userId;
        const user = new User({ id: id, name: input });

        this.props.onCreateUser(user);

        this.setState(prevState => { return { userId: prevState.userId + 1 } });

    }

    handleUserNameChange = (e) => {


        this.setState({ textFieldValue: e.target.value });

    }


    render() {

        const textFieldStyle = {
            marginLeft: 20,
            border: 2,
        };
        const RaisedButtonStyle = {
            margin: 12,
        }


        const formCls = this.state.isVisible ? '' : 'd-none';


        const form = (
            <form className={formCls}>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">User name:</label>
                    <TextField
                        hintText="Please enter a name"
                        style={textFieldStyle}
                        underlineShow={false}
                        id="formGroupExampleInput"
                        value={this.state.textFieldValue}
                        onChange={this.handleUserNameChange} />
                    <RaisedButton
                        label="Add User"
                        style={RaisedButtonStyle}
                        onClick={this.createUser} />
                </div>
            </form>
        )

        return this.state.isVisible ? form : '';

    }
}

export default UserForm;