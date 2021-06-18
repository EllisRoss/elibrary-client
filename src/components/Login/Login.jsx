import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {loginThunkCreator} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    if (props.isAuth) {
        return <Redirect to={'/library'}/>
    }
    return (
        <div>
            <Formik
                initialValues={{login: '', password: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.login) {
                        errors.login = 'Required';
                    }
                    if (!values.password) {
                        errors.password = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    console.log(values);
                    props.login(values.login, values.password);
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <div>
                            <Field type="login" name="login" placeholder="login"/>
                            <ErrorMessage name="login" component="label"/>
                        </div>
                        <div>
                            <Field type="password" name="password" placeholder="password"/>
                            <ErrorMessage name="password" component="label"/>
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = {
    login: loginThunkCreator,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);