import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {connect} from "react-redux";
import {registrationThunkCreator} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const Registration = (props) => {

    if (props.isAuth) {
        return <Redirect to={'/library'}/>
    }

    return (
        <div>
            <Formik
                initialValues={{login: '', password: '', confirmPassword: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.login) {
                        errors.login = 'Required';
                    }
                    if (!values.password) {
                        errors.password = 'Required';
                    }
                    if (!values.confirmPassword) {
                        errors.password = 'Required';
                    }
                    if (values.confirmPassword !== values.password) {
                        errors.password = 'Passwords do not match!';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    console.log(values);
                    props.registration(values.login, values.password);
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
                        <div>
                            <Field type="password" name="confirmPassword" placeholder="confirm password"/>
                            <ErrorMessage name="confirmPassword" component="label"/>
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
        isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps = {
    registration: registrationThunkCreator,
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);