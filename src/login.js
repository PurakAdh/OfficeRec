import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import fire from './config/fire';
import './login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: ''

        }

    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
            //console.log(error);
            window.alert('Wrong Login Details', error);
        });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });

    }

    render() {

        return (
            <div className='row pad'>
                <div className='col-lg-3 col-md-2 col-sm-2 col-xl-3'></div>
                <div className="col-lg-6 col-md-8 col-sm-8 col-xs-12 col-xl-6 container-fluid shadow login-box">
                    <h2 align='center'>AUTOMATA</h2>
                    <form>
                        <div className="form-group">
                            <label for="InputEmail1"> Email Address</label>
                            <input value={this.state.email} onChange={this.handleChange} type="email" name="email"
                                className="form-control" id="InputEmail1" aria-describedby="emailHelp"
                                placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted"> We will never share your email with anyone else.</small>
                        </div>

                        <div className="form-group">
                            <label for="InputPassword1">Password</label>
                            <input value={this.state.password} onChange={this.handleChange} type='password'
                                name='password' className="form-control" id="InputPassword1"
                                placeholder="Enter password" />
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button type="submit" onClick={this.login} className="btn btn-primary loginbutton"> Login </button>
                        </div>
                        <div className='d-flex justify-content-center'>
                            {/* <small id="emailHelp" className="form-text text-muted">To register, contact your administrator.</small> */}
                            <small id="emailHelp" className="form-text text-muted"><b>Administrator:</b> email: admin@automata.com, pass: admin123</small>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <small id="emailHelp" className="form-text text-muted"><b>User:</b> email: hari@gmail.com, pass: hari123</small>
                        </div>
                    </form>

                </div>
                <div className='col-lg-3 col-md-2 col-sm-2 col-xl-3'></div>
            </div>
        );
    }
}
export default Login;










