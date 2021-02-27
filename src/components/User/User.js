import { faUserCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './User.css';

const User = (props) => {
    const {name : {first,last},login:{username},phone,picture:{medium:imgUrl},email,salary,gender}=props.users
    return (
        <div className="user">
            <img src={imgUrl} alt="profile image"/>
            <h4>{`${first} ${last}`}</h4>
            <span>{username}</span><br/>
            <p>{email}</p>
            <div className="userInfo">
                <div className="gender">
                    <h5>Gender</h5>
                    <p>{gender}</p>
                </div>
                <div className="salary">
                    <h5>Salary</h5>
                    <small>{salary}</small>
                </div>
            </div>
            <div className="userButton">
                <button onClick={()=>props.handleAddUser(props.users)}><FontAwesomeIcon icon={faUserPlus} /> Add Friend</button>
                <button><FontAwesomeIcon icon={faUserCheck} /> Follow</button>
            </div>
        </div>
    );
};

export default User;