import { useContext } from 'react';
import StudentAuth from './Auth/studentAuth';
import { useAppContext } from './controllers/AppContext';
import React from 'react';

const AuthPage = (props) => {
    console.log(props)
    return (
        <div>
            <StudentAuth />
        </div>
    )
}

export default AuthPage;