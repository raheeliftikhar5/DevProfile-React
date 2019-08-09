import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {registerUser} from '../store/actions/authActions';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.errors) {
      this.setState({errors: nextProps.errors});
    } 
  }
  onChange(e) {
    this.setState({[e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };

    this.props.registerUser(user, this.props.history);
  }
  render() {
    const {errors} = this.state;

    return (
      <div className="py-4">
        <div className="text-center">
          <h1>SignUp</h1>
          <h4>Create your account</h4>
        </div>
        <form noValidate className="auth-form" onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              className={classnames('form-control', {
                'is-invalid': errors.name
              })}
              name="name" type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.onChange}>
            </input>
            {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
          </div>
          <div className="form-group">
            <input
              className={classnames('form-control', {
                'is-invalid': errors.email
              })}
              name="email"
              type="email"
              placeholder="Email Address"
              value={this.state.email}
              onChange={this.onChange}>
            </input>
            {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
          </div>
          <div className="form-group">
            <input
              className={classnames('form-control', {
                'is-invalid': errors.password
              })}
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onChange}>
            </input>
            {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
          </div>
          <div className="form-group">
            <input
              className={classnames('form-control', {
                'is-invalid': errors.confirmPassword
              })}
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={this.state.confirmPassword}
              onChange={this.onChange}>
            </input>
            {errors.confirmPassword && (<div className="invalid-feedback">{errors.confirmPassword}</div>)}
          </div>
          <button className="btn btn-primary w-100" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProp = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProp, {registerUser})(Register);