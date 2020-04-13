
import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminLogin extends Component {
    state = {
        username: '',
        password: '',
    };

    login = (event) => {
        event.preventDefault();

        if (this.state.username && this.state.password) {
            this.props.dispatch({
                type: 'ADMIN_LOGIN',
                payload: {
                    username: this.state.username,
                    password: this.state.password,
                },
            });
        } else {
            this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
        }
    } // end login

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }

    render() {
        return (
            <div>
                {this.props.errors.loginMessage && (
                    <h2 className="alert" role="alert">{this.props.errors.loginMessage}</h2>
                )}
                <form onSubmit={this.login}>
                    <h1>Login</h1>
                    <div>
                        <label htmlFor="username">
                            Username:
                            <input  type="text"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.handleInputChangeFor('username')}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="password">
                            Password:
                            <input
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleInputChangeFor('password')}
                            />
                        </label>
                    </div>
                    <div>
                        <input
                            className="log-in"
                            type="submit"
                            name="submit"
                            value="Log In"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
    errors: state.errors,
});

export default connect(mapStateToProps)(AdminLogin);

// Here the admin can login to the website. The admin’s username and password will be hardcoded into the database. They will enter their username and password. 
// Once click of the “Login” button, the admin will be taken to the Admin Home (2).
