import React, { Component, Fragment } from 'react';
import { withFormik, Form, Field } from 'formik';

import axiosInst from './../config/axiosConfig';
import UserAuth from '../service/UserAuth';

class Login extends Component {

    constructor(props) {

        super(props);
    }


    render() {

        const { touched, values, errors, isSubmitting } = this.props;

        return (
            <Fragment>
                <Form>
                    <div>
                        {
                            touched.email &&
                            errors.email &&
                            (
                                <div>
                                    {
                                        errors.email
                                    }
                                </div>
                            )
                        }

                        <Field type='text' name='email' placeholder='Enter email' />
                    </div>
                    <div>
                        {
                            touched.password &&
                            errors.password &&
                            (
                                <div>
                                    {
                                        errors.password
                                    }
                                </div>
                            )
                        }

                        <Field type='text' name='password' placeholder='Enter password' />
                    </div>
                    <div>

                        {/* <button disabled={isSubmitting}> */}
                        <button>
                            Submit
                        </button>
                    </div>
                </Form>
            </Fragment>
        )
    }
}

export default withFormik(
    {
        mapPropsToValues({ email, password }) {

            return {
                email: email || '',
                password: password || ''
            }
        },
        async handleSubmit(values, { setErrors, setSubmitting, resetForm, props }) {


            const { email, password } = values;

            const result = await axiosInst(
                {
                    url: 'http://localhost:3001/api/login',
                    method: 'post',
                    data: {
                        email,
                        password
                    }
                });

            UserAuth.setToken(result.data, () => {

                props.history.push('/home');
            });
        }
    }
)(Login);