import { useContext, useEffect, useState } from 'react';
import StudentAuth from './Auth/studentAuth';
import React from 'react';
import AdminPage from './Auth/adminAuth';
import SuperAdmin from './Auth/superAdmin';

const AuthPage = () => {


    const [state, setState] = useState(<StudentAuth />);

    useEffect(() => {
        let container = localStorage.getItem("container");
        switch (container) {
            case "admin":
                setState(<AdminPage />)
                break;
            case "student":
                setState(<StudentAuth />)
                break;
            case "super":
                setState(<SuperAdmin />)
                break;
            default:
                setState(<StudentAuth />)
                break;
        }
    },[])

    return (
        <div>
            {state}
        </div>
    )
}

export default AuthPage;