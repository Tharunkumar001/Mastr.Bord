import styles from '../../styles/Home.module.css'
import { Card, CardActions, TextField, Box, CardActionArea, Button, CardContent, ButtonBase } from '@material-ui/core';
import Image from 'next/image';
import Arrow from "@material-ui/icons/SendOutlined"
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

const StudentAuth = () => {
    return (
        <div>
        <h1 style={{textAlign:"center", padding:"1rem"}}>#for logo</h1>

        <Card className={styles.profileLoginCard}>
        <h1 style={{textAlign:"center"}}>Student</h1>
            <CardActions className={styles.profileLoginCardAction}>
                
                <TextField id="RollNo" label="RollNo" variant="filled" helperText="Eg: 19CSR116" 
                />

                <TextField id="Password" label="Password" variant="filled" helperText="Specified Password"
                />
            </CardActions>

            <CardActions className={styles.profileCardContent}>
                <ButtonBase
                    className={styles.profileSubmitBtn} 
                    
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

export default StudentAuth;