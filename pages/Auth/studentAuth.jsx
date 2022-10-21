import styles from '../../styles/Home.module.css'
import { Card, CardActions, TextField, ButtonBase, createTheme} from '@material-ui/core';
import Arrow from "@material-ui/icons/SendOutlined"
import { useState } from 'react';
import cogoToast from 'cogo-toast';

const StudentAuth = () => {
    const [details, setDetails] = useState({rollNo: "", dept: ""});
    const [err, setErr] = useState({rollNo: 'primary', dept: 'primary'});

    const loginHandler = async () => {    
        //api call
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
                color={err.rollNo}
                autoFocus={true}
                inputProps={{ maxLength: 8 }}
                />

                <TextField id="Department" label="Department" variant="filled" helperText="Eg: CSE"
                value={details.dept.trim()}
                onChange={(e) => setDetails({...details, dept: e.target.value})}
                color={err.dept}
                inputProps={{ maxLength: 5 }}
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