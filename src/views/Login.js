import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {loginUser} from '../store/actions/authActions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({errors: nextProps.errors});
    }
  }
  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  onSubmit(e) {
    e.preventDefault();
    
    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(user, this.props.history);
  }

  render() {
    const {errors} = this.state;

    return (
      <div className="py-5">
        <div className="text-center">
          <h1>Login Page</h1>
        </div>
        <form noValidate className="auth-form" onSubmit={this.onSubmit}>
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
          <button className="btn btn-primary w-100" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, {loginUser})(Login);