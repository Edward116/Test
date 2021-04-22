import React, {useState} from "react";
import './Dashboard.css'

const Dashboard = () => {
    const [users, setUsers] = useState({
        all: 20, online: 10, eighteenplus: 12
    })
    return (
        <div>
            <h1>Dashboard:</h1>
            <div className='dashNumbers'>
                <div>
                    All Users : {users.all}
                </div>
                <div>
                    Online : {users.online}
                </div>
                <div>
                    18+ : {users.eighteenplus}
                </div>
            </div>
        </div>
    )
}

export default Dashboard