import styles from '../../styles/Home.module.css'
import { Card, CardActions, TextField, Box, CardActionArea, Button, CardContent, ButtonBase, makeStyles } from '@material-ui/core';
import Arrow from "@material-ui/icons/SendOutlined"
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { useState } from 'react';


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
    const [err, setErr] = useState({Email: 'primary', Username: 'primary', Password: 'primary'});

    const loginHandler = async () => {    
        //api call
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
                        color={err.rollNo}
                        autoFocus={true}

                    />

                    <TextField id="Username" label="Username" variant="filled" helperText="Specified Username"
                        value={details.Username.trim()}
                        onChange={(e) => setDetails({...details, Username: e.target.value})}
                        color={err.rollNo}
                        autoFocus={true}
                        inputProps={{ maxLength: 10 }}
                    />

                    <TextField id="Password" label="Password" variant="filled" helperText="Specified Password"
                        value={details.Password.trim()}
                        onChange={(e) => setDetails({...details, Password: e.target.value})}
                        color={err.rollNo}
                        autoFocus={true}
                        inputProps={{ maxLength: 10 }}
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
                <Button  autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    </div>
    )
}

export default AdminPage;