import styles from '../../styles/Home.module.css'
import { Card, CardActions, TextField, Box, CardActionArea, Button, CardContent, ButtonBase } from '@material-ui/core';
import Image from 'next/image';
import Arrow from "@material-ui/icons/SendOutlined"
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

const AdminPage = () => {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>#for logo</h1>

            <Card className={styles.profileLoginCard}>
            <h1 style={{textAlign:"center"}}>Admin</h1>
                <CardActions className={styles.profileLoginCardAction}>
                    <TextField id="Email" label="Email" variant="filled" 
                    helperText="Eg: abc@gmail.com"
                    />

                    <TextField id="Username" label="Username" variant="filled" helperText="Specified Username"
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

export default AdminPage;