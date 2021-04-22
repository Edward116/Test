import React from "react";
import {connect} from "react-redux";
import {getUsers} from "../../../Redux/Reducers/ProfileReducer";
import {Users} from "./Users";

class UsersClass extends React.Component {

    componentDidMount() {
        this.props.getUsers();
    }



    render() {
        return (
                    <Users {...this.props}/>

        );
    }
}

let mapStateToProps = (state) => {
    return{
        users: state.usersReducer.users,
        allUsers: state.usersReducer.allUsers
    }
}


export const UserContainer = connect(mapStateToProps, {
    getUsers
})(UsersClass)