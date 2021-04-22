import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {usersAPI} from "../../../API/API";

const LogF = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="input-field">
                <Field
                    placeholder="Введите email"
                    component="input"
                    type="text"
                    name="email"
                />
                <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
                <Field
                    placeholder="Введите пароль"
                    component="input"
                    type="password"
                    name="password"
                />
                <label htmlFor="password">Password</label>
            </div>

            <div>
                <button className='btn green'>Войти</button>
                <NavLink to='/registration' className='btn grey'>Зарегестрироваться</NavLink>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LogF)


const LoginForm = () => {

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const logIn = (value) => {
        usersAPI.login(value);
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <div className="card white darken-3">
                    <div className="card-content ">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <ReduxLoginForm onSubmit={logIn}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm