import styles from '../../styles/Home.module.css'
import { Card, CardActions, TextField, Button, ButtonBase, InputAdornment, IconButton } from '@material-ui/core';
import Image from 'next/image';
import Arrow from "@material-ui/icons/SendOutlined"
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useState } from 'react';

const SuperAdmin = () => {
    const [showPassword, setShowPassword] = useState(false);
const handleClickShowPassword = () => setShowPassword(!showPassword);
const handleMouseDownPassword = () => setShowPassword(!showPassword);
    return (
        <div>
            <h1 style={{textAlign:"center"}}>#for logo</h1>

            <Card className={styles.profileLoginCard}>
            <h1 style={{textAlign:"center"}}>Super Admin</h1>
                <CardActions className={styles.profileLoginCardAction}>
                    <TextField id="Email" label="Email" variant="filled" helperText="Eg: abc@gmail.com" 
                    />

                    <TextField id="Username" label="Username" variant="filled" helperText="Specified Username" 
                    />

                    <TextField id="Password" label="Password" variant="filled" helperText="Specified Password" 
                      InputProps={{ // <-- This is where the toggle button is added.
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        )
                        }}
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

export default SuperAdmin;