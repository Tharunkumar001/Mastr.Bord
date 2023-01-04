import styles from '../../styles/Home.module.css'
import { Card, CardActions, TextField, ButtonBase} from '@material-ui/core';
import Arrow from "@material-ui/icons/SendOutlined"
import { useState } from 'react';
import cogoToast from 'cogo-toast';
import logo from "../../public/mastr_bord_logo.png";
import Image from 'next/image';
import { useRouter } from 'next/router';

const StudentAuth = () => {
    const [details, setDetails] = useState({rollNo: "", dept: ""});
    const router = useRouter();

    const loginHandler = async () => {    
        //api call
    }

    const validation = () => {
        //validaation
    }

    return (
        <div className={styles.rootDiv}>
            <div style={{display:"flex", justifyContent:"center"}}  onClick={() => router.push("/")}>
                <Image
                    src={logo}
                    alt="Picture of the author"
                    width={400}
                    height={200}
                />
            </div>
        <Card className={styles.profileLoginCard}>
        <h1 style={{textAlign:"center"}}>Student</h1>
            <CardActions className={styles.profileLoginCardAction}>

                <TextField fullWidth id="RollNo" label="RollNo" variant="filled" helperText="Eg: 19CSR116" 
                value={details.rollNo.trim()}
                onChange={(e) => setDetails({...details, rollNo: e.target.value})}
                autoFocus={false}
                inputProps={{ maxLength: 8 }}
                />

                <TextField fullWidth id="Department" label="Department" variant="filled" helperText="Eg: CSE"
                value={details.dept.trim()}
                onChange={(e) => setDetails({...details, dept: e.target.value})}
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