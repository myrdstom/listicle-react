import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import woman from '../../../assets/css/components/auth/woman.png';

const SectionStyle = styled.div`
    background-image: url(${woman});
    background-size: cover;
    height: 94.5vh;
`;

export default function Registration(props) {
    return (
        <div className="parent-auth-container container-fluid">
            <div className="auth__grid">
                <div className="registration__aside">
                    <div className="registration__container">
                        <h1>Get Started, its easy</h1>
                        <div className="auth__action">Sign Up</div>
                        <br />
                        <form noValidate onSubmit={props.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    placeholder="Username"
                                    name="username"
                                    value={props.username}
                                    onChange={props.onChange}
                                    required
                                />
                                {props.errors.username && (
                                    <div className="error-message">
                                        {props.errors.username}
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control form-control-sm"
                                    placeholder="Email Address"
                                    name="email"
                                    value={props.email}
                                    onChange={props.onChange}
                                />
                                {!props.errors.username
                                    ? props.errors.email && (
                                          <div className="error-message">
                                              {props.errors.email}
                                          </div>
                                      )
                                    : ''}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control form-control-sm"
                                    placeholder="Password"
                                    name="password"
                                    value={props.password}
                                    onChange={props.onChange}
                                />
                                {!props.errors.username && !props.errors.email
                                    ? props.errors.password && (
                                          <div className="error-message">
                                              {props.errors.password}
                                          </div>
                                      )
                                    : ''}
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPassword">
                                    confirmPassword
                                </label>
                                <input
                                    type="password"
                                    className="form-control form-control-sm"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    value={props.confirmPassword}
                                    onChange={props.onChange}
                                />
                                {!props.errors.username &&
                                !props.errors.email &&
                                !props.errors.password
                                    ? props.errors.confirmPassword && (
                                          <div className="error-message">
                                              {props.errors.confirmPassword}
                                          </div>
                                      )
                                    : ''}
                            </div>
                            <input
                                type="submit"
                                className="btn btn-primary btn-block mt-4"
                            />
                        </form>
                        <br />
                        <div className="login-link">
                            Already a member?{' '}
                            <Link to="/login" className="sign__in">
                                &nbsp;Sign In
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="image__container">
                    <SectionStyle />
                </div>
            </div>
        </div>
    );
}
