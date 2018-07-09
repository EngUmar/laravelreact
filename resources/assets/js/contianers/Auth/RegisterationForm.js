import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect, withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions';


class RegisterationForm extends Component {

    /**
     * Cunstroctor Function
     * @param {*} props 
     */
    constructor(props) {

        super(props);

        this.state = {
            submitted: false,
            fields: {
                reg_role: 11,
            },
            errors: {},
            serverRgstrEmailError: '',
        };

    }

    /**
     * Function to handle validation of registeration form
     */
    handleValidation = () =>  {
    
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        /**
         * Firt Name Validation
         */
        if (!fields.firstName) {
            formIsValid = false;
            errors.firstName = "First name cannot be blank.";
        }

        if (typeof fields.firstName !== "undefined") {
            if (!fields.firstName.match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors.firstName = "First Name should contain only letters.";
            }
        }

        /**
         * Last Name Validation
         */
        if (!fields.lastName) {
            formIsValid = false;
            errors.lastName = "Last name cannot be blank.";
        }

        if (typeof fields.lastName !== "undefined") {
            if (!fields.lastName.match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors.lastName = "Last Name should contain only letters.";
            }
        }

        /**
         * Email Validation
         */
        if (!fields.email) {
            formIsValid = false;
            errors.email = "Email can not be blank.";
        }

        if (typeof fields.email !== "undefined") {
            let lastAtPos = fields.email.lastIndexOf('@');
            let lastDotPos = fields.email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields.email.indexOf('@@') == -1 && lastDotPos > 2 && (fields.email.length - lastDotPos) > 2)) {
                formIsValid = false;
                errors.email = "Enter a valid email.";
            }
        }

        /**
         * Password Validation
         */
        if (!fields.password) {
            formIsValid = false;
            errors.password = "Password Field can not be blank.";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }
    
    /**
     * Function to handle registeration form submission
     */
    handleSubmit = (e) => {

        e.preventDefault();
        this.setState({ serverRgstrEmailError: '' });
        /**
         * If registeration form validation is successful.
         */
        if (this.handleValidation()) {
            this.props.register(userActions.register(this.state.fields));
        }

    }

    /**
     * Function to handle form input changes
     * @param{string} field is the name of the event generator
     */
    handleChange = (field) => (e) => {

        const { fields } = this.state;
        const newField = {
            ...fields,
            [field]: e.target.value
        };
        this.setState({ fields: newField });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.error !== undefined) {
            this.setState({ serverRgstrEmailError: nextProps.error.email });
        }
    }

    render() {

        /**
         * Some constants to show error messages.
         */
        const errFName = this.state.errors.firstName;
        const errlName = this.state.errors.lastName;
        const errEmail = this.state.errors.email;
        const errPass = this.state.errors.password;
        const errFname = this.state.errors.firstName;
        /**
         * Api error msg
         */
        const apiErrorMsg = this.props.error ? <p className='api-error-msg'>{this.props.error}</p> : '';

        console.log(apiErrorMsg);

        return (
            <div className='rgstrForm'>
                <p className='rgstrText'> Register Here</p>
                <form id="register-form" onSubmit={this.handleSubmit.bind(this)}>
                <div className="modal-body">
                    <div className="row gap-20">
                         <div className="col-sm-12 col-md-12">
                            {apiErrorMsg}
                        </div>
                        <div className="col-sm-12 col-md-12">
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className={`form-control mb-5 ${errFName ? 'error-border' : ''}`}
                                    onChange={this.handleChange('firstName')}
                                    value={this.state.fields.firstName}
                                    placeholder="First Name"
                                />
                                <p className="form-validation-error">{errFName}</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12">
                            <div className="form-group">
                                <input style={{ marginBottom: '6px' }}
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className={`form-control mb-5 ${errlName ? 'error-border' : ''}`}
                                    onChange={this.handleChange('lastName')}
                                    alue={this.state.fields.lastName}
                                    placeholder="Last Name"
                                />
                                <p className="form-validation-error">{errlName}</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12">
                            <div className="form-group">
                                <input
                                    type="register_email"
                                    id="email"
                                    name="email"
                                    className={`form-control mb-5 ${errEmail ? 'error-border' : ''}`}
                                    onChange={this.handleChange('email')}
                                    value={this.state.fields.email}
                                    type="email"
                                    placeholder="Email"
                                />
                                <p className="form-validation-error">{errEmail}</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12">
                            <div className="form-group">
                                <input
                                    type="password"
                                    id="register_password"
                                    name="password"
                                    className={`form-control mb-5 ${errPass ? 'error-border' : ''}`}
                                    aria-required="true"
                                    aria-invalid="false"
                                    onChange={this.handleChange('password')}
                                    value={this.state.fields.password}
                                    type="password"
                                    placeholder="Password" /><div className="woocommerce-password-strength" aria-live="polite">
                                </div>
                                <p className="form-validation-error">{errPass}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer text-center">
                    <div className="col-md-6">
                        <button type="submit" className="go-btn btn btn-primary">Sign-Up</button>
                    </div>
                </div>
            </form> 
            </div>
        
        )
    }

};

function mapStateToProps(state) {
    const { error } = state.registration;
    return {
        error
    };
}


const mapDispatchToProps = dispatch => {
    return {
        register: (data) => dispatch(data),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterationForm));

