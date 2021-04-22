import {usersAPI as userAPI} from "../../API/API";

const SET_USERS = 'SET_USERS'
const ALL_USERS = 'ALL_USERS'

let initialState = {
    users: [],
    allUsers: 0
};


export const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USERS:
            return {...state, users: action.users}
        case ALL_USERS:
            return {...state, allUsers: action.numberOfUsers}


        default:
            return state;
    }
}

const setUsers = (users) => ({type: SET_USERS, users});
const allUsers = (numberOfUsers) => ({type: ALL_USERS, numberOfUsers})


export const getUsers = () => {
    return (dispatch) => {
        userAPI.getUsers()
            .then(data => {
                dispatch(setUsers(data))
                dispatch(allUsers(data.length))
            })
    }
}

