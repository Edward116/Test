import React from "react";
import './Users.css'


export const Users = (props) => {

    return(
        <div >
            <h1>Users: {props.allUsers}</h1>
            <div className='userProfile'>
                {props.users.map(item => {
                        return (
                            <div className=" userCard">
                                <div className="col s12 m6">
                                    <div className="card blue-grey darken-1">
                                        <div className="card-content white-text">
                                            <span className="card-title">{item.isAdmin ? 'Admin' : 'User'}</span>
                                            <div>
                                                Name: {item.fullName}
                                            </div>
                                            <div>
                                                Email: {item.email}
                                            </div>
                                            <div>
                                                City: {item.city}
                                            </div>
                                            <div>
                                                Data OF Birth: {item.dateOfBirth}
                                            </div>
                                        </div>
                                        <div className="card-action">
                                            <button className='btn grey'>Edit</button>
                                            <button className='btn grey'>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}

