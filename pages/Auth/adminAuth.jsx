import styles from '../../styles/Home.module.css'
import { Card, CardActions, TextField, Button, ButtonBase, makeStyles } from '@material-ui/core';
import Arrow from "@material-ui/icons/SendOutlined"
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { useState } from 'react';
import cogoToast from 'cogo-toast';


const useStyles = makeStyles((theme) => ({
    input: {
        "&:invalid": {
            border: "red solid 2px"
        }
    }
}));

const AdminPage = () => {
    const classes = useStyles();

    const [details, setDetails] = useState({Email:'', Username:'', Password:''});

    const loginHandler = async () => {    
        //api call
        let val = await validate();
        
        if(val){
            //api vall
        }
    }

    const validate = () => {
        //validate details
        
        var verifyEmail = String(details.email)
            .toLowerCase()
            .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

        var verifyUsername = String(details.Username)
            .match(
            /^[A-Za-z][A-Za-z0-9_]{7,15}$/ //Tharun1411 
        );

        var verifyPassword = String(details.Password)
            .match(
            /^[A-Z][A-Za-z0-9]/ //Tharun#1411
        );

        if(verifyEmail | verifyPassword | verifyUsername == null ){
            cogoToast.error("Enter valid details");
        }else{
            return true;
        }
    }

    return (
        <div>
            <h1 style={{textAlign:"center"}}>#for logo</h1>

            <Card className={styles.profileLoginCard}>
            <h1 style={{textAlign:"center"}}>Admin</h1>
                <CardActions className={styles.profileLoginCardAction}>
                    <TextField id="Email" label="Email" variant="filled" helperText="Eg: abc@gmail.com"
                        value={details.Email.trim()}
                        onChange={(e) => setDetails({...details, Email: e.target.value})}
                        autoFocus={true}
                    />

                    <TextField id="Username" label="Username" variant="filled" helperText="Eg: Tharun1411"
                        value={details.Username.trim()}
                        onChange={(e) => setDetails({...details, Username: e.target.value})}
                        autoFocus={true}
                        inputProps={{ maxLength: 15 }}
                    />

                    <TextField id="Password" label="Password" variant="filled" helperText="Eg: Tharun#1411"
                        value={details.Password.trim()}
                        onChange={(e) => setDetails({...details, Password: e.target.value})}
                        autoFocus={true}
                        inputProps={{ maxLength: 15 }}
                    />
                </CardActions>

                <CardActions className={styles.profileCardContent}>
                    <ButtonBase
                        className={styles.profileSubmitBtn} 
                        onClick={loginHandler}
                    >
                        Login <Arrow /></ButtonBase>
                </CardActions>

                <ButtonBase >ForgotPassword</ButtonBase>
            </Card><br />

            <Dialog
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
            <DialogTitle className={styles.alertDialogTitle}>
                Password Recovery!!
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
            </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    </div>
    )
}

export default AdminPage;