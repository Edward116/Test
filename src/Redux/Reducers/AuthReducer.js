import {usersAPI}  from "../../API/API";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    admin: false,
    userId: null,
    isAuth: false
};


export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {...state, admin: action.admin, userId: action.userId, isAuth: action.admin}
        default:
            return state;
    }
}




const setUserData = (admin, userId) => ({type: SET_USER_DATA, data:{admin, userId}})

export const getUserData = () => (dispatch) => {
    usersAPI.login()
        .then(data => {
                dispatch(setUserData(data.admin, data.userId))
        })
}

console.log(initialState);
