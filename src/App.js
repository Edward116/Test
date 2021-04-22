import React, {useState} from "react";
import 'materialize-css'
import AuthPage from "./Pages/LoginPage/LoginPage";
import GlobalPage from "./Pages/GlobalPage/GlobalPage";
import {connect} from "react-redux";
import {Users} from "./Pages/GlobalPage/UsersPage/Users";
import {getUserData, setUserData} from "./Redux/Reducers/AuthReducer";

class AppClass extends React.Component {

    componentDidMount() {
        this.props.getUserData();
    }



    render() {
        return (
            <App {...this.props}/>

        );
    }
}

const App = (props) => {


    return (

            <div>
                {props.isAuth ?
                    <div>
                        <GlobalPage/>
                    </div>
                    :
                    <div>
                        <AuthPage/>
                    </div>
                }
            </div>

    );
}

let mapStateToProps = (state) => {
    return{
        isAuth: state.authReducer.isAuth,
    }
}

const AppContainer = connect(mapStateToProps,{getUserData})(AppClass)


export default AppContainer;
