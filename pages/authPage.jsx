import { useContext } from 'react';
import StudentAuth from './Auth/studentAuth';
import AppContext from './controllers/AppContext';

const AuthPage = (props) => {
    const val = useContext(AppContext);
    console.log(val);
    return (
        <div>
            <StudentAuth />
        </div>
    )
}

export default AuthPage;