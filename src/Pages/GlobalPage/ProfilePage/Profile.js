import React, {useState} from "react";
import './Profile.css'

const Profile = () => {
    const [profile, setProfile] = useState({
        name: 'Edward', email: 'e@mail.com', city: 'Kiev'
    })



    return(
        <div >
             <h1>Profile:</h1>
            <div className='profile'>
                        <div className="row">
                            <div className="col s12 m6">
                                <div className="card blue-grey darken-1">
                                    <div className="card-content white-text">
                                        <span className="card-title">User</span>
                                        <div>
                                            Name: {profile.name}
                                        </div>
                                        <div>
                                            Email: {profile.email}
                                        </div>
                                        <div>
                                            City: {profile.city}
                                        </div>
                                    </div>
                                    <div className="card-action">
                                        <button className='btn grey'>Edit</button>
                                        <button className='btn grey'>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
    )
}

export default Profile