import { useContext } from 'react';
import StudentAuth from './Auth/studentAuth';
import { useAppContext } from './controllers/AppContext';

const AuthPage = (props) => {
    let val = useAppContext();
    console.log(val);
    return (
        <div>
            <StudentAuth />
        </div>
    )
}

export default AuthPage;