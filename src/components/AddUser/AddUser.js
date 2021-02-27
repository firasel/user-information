import React from 'react';
import './AddUser.css';

const AddUser = (props) => {
    const {name : {first,last},picture:{medium:imgUrl},salary}=props.user

    return (
        <div className="addUsers">
            <img src={imgUrl} alt="user image"/>
            <h4>{`${first} ${last}`}</h4>
            <small>Salary:{salary}</small>
        </div>
    );
};

export default AddUser;