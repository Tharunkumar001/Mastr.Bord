import styles from '../../styles/Home.module.css'
import { Card, CardActions, TextField, ButtonBase, createTheme} from '@material-ui/core';
import Arrow from "@material-ui/icons/SendOutlined"
import { useState } from 'react';

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#0971f1',
            darker: '#053e85',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});

const StudentAuth = () => {
    const [details, setDetails] = useState({rollNo: "", dept: ""});
    const [error, setError] = useState({rollNo: 'primary', dept: 'primary'});

    const loginHandler = async () => {    
        
    }
    return (
        <div>
        <h1 style={{textAlign:"center", padding:"1rem"}}>#for logo</h1>

        <Card className={styles.profileLoginCard}>
        <h1 style={{textAlign:"center"}}>Student</h1>
            <CardActions className={styles.profileLoginCardAction}>

                <TextField id="RollNo" label="RollNo" variant="filled" helperText="Eg: 19CSR116" 
                value={details.rollNo.trim()}
                onChange={(e) => setDetails({...details, rollNo: e.target.value})}
                color={error}
                />

                <TextField id="Department" label="Department" variant="filled" helperText="CSE"
                value={details.dept.trim()}
                onChange={(e) => setDetails({...details, dept: e.target.value})}
                color={error}
                />
            </CardActions>

            <CardActions className={styles.profileCardContent}>
                <ButtonBase
                    className={styles.profileSubmitBtn} 
                    onClick = {loginHandler}
                >
                    Login <Arrow /></ButtonBase>
            </CardActions>

        </Card><br />
        </div>
    )
}

export default StudentAuth;