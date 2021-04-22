import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {usersAPI} from "../../../API/API";


const regForm = (props) => {


    return(
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

            <div className="input-field">
                <Field
                    placeholder="Введите полное имя"
                    component="input"
                    type="text"
                    name="fullName"
                />
                <label htmlFor="fullName">Имя и Фамилия</label>
            </div>
            <div className="input-field">
                <Field
                    component="input"
                    type="date"
                    name="dateOfBirth"
                />
                <label htmlFor="dateOfBirth">Дата рождения</label>
            </div>
            <div className="input-field">
                <Field
                    placeholder="Введите название города"
                    component="input"
                    type="text"
                    name="city"
                />
                <label htmlFor="password">Город</label>
            </div>

            <div>
                <label>
                    <Field
                        component="input"
                        type="checkbox"
                        name="isAdmin"
                        />
                    <span>admin</span>
                </label>
            </div>
            <div className="card-action">
                <button className='btn green'>Зарегестрироваться</button>
                <NavLink to='/login' className='btn grey'>Войти</NavLink>
            </div>
        </form>
    )
}

const ReduxRegForm = reduxForm({
    form: 'registration'
})(regForm)


const RegistrationForm = () => {

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const handleRegist =(value) => {
        usersAPI.registr(value);
    }
    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Registration</h1>
                <div className="card white darken-3">
                    <div className="card-content ">
                        <span className="card-title">Регистрация</span>
                        <div>
                            <ReduxRegForm onSubmit={handleRegist}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RegistrationForm