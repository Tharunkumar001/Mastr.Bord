import { Box, Button, Card, CardContent, CardHeader, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import styles from "../../styles/Home.module.css";

import React from 'react';
import * as _ from "lodash";
import LoadingComponent from "./loadingComponent";
import Image from "next/image";
import logo from "../../public/mastr_bord_logo.png";


const useStyles = makeStyles((theme) => ({
    pairOne:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        gap:'1rem',
        [theme.breakpoints.up('md')] : {
            display:"flex",
            flexDirection:"row",
            gap:'1rem',
            padding:'0.5rem',            
        }
    },

    form:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },

    submitBtn:{
        paddingTop:'0.5rem'
    },

    ol:{
        listStyle:"none",

        '& li':{
            padding:'0.2rem'
        }
    }

}))

const ClassCreation = () => {

    const classes = useStyles();
    const [ value, setValue ] = useState(10);
    const [open, setOpen] = useState(false);

    const date = new Date();
    var year = date.getFullYear();

    const [form, setForm] = React.useState({count:1, dept:'CSE', startRno:1, section:'A', yearOfStudy:4, oddOrEven:'ODD',passedOut:2023 });
    const [loading, setLoading] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }
    
    const handleOpen = () => {
        setOpen(true);
    }

    const rollNo = [1,60,61,62,63,64,65,66,67,68,69,70];

    const handleSubmit = async () => {
        const data = await axios.get("http://localhost:3000/api/classCreation");
        console.log(data);
    }
    return(
        
        <div style={{marginBottom:'5rem',}}>
        {/* <div style={{display:"flex", justifyContent:"center"}}>
            <Image
                src={logo}
                alt="Picture of the author"
                width={300}
                height={130}
            />
        </div> */}
            <div className={styles.superAdminCardRoot}>
                <h2 style={{textAlign:"center"}}>Class Creation Form</h2>
                <div className={classes.form}>
                    <form>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                    <div  className={classes.pairOne}>
                        <TextField
                            id="outlined-select-currency"
                            variant="filled"
                            select
                            label="Count"
                            value={form.count}
                            onChange={(e) => setForm({...form, count:e.target.value})}
                            helperText="Please select valid details"
                            >
                            {_.range(1, 66).map((option,ind) => (
                                <MenuItem key={ind} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="outlined-select-currency"
                            variant="filled"
                            select
                            label="Starting R.No"
                            value={form.startRno}
                            onChange={(e) => setForm({...form, startRno:e.target.value})}
                            helperText="Please select valid details"
                        >
                            {rollNo.map((option) => (
                                <MenuItem key={option} value={option}>
                                {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div  className={classes.pairOne}>
                    <TextField
                        id="outlined-select-currency"
                        variant="filled"
                        select
                        label="Dept"
                        value={form.dept}
                        onChange={(e) => setForm({...form, dept:e.target.value})}
                        helperText="Please select valid details"
                        >
                        {['CSE','IT'].map((option) => (
                            <MenuItem key={option} value={option}>
                            {option}
                            </MenuItem>
                        ))}
                        </TextField>
                        <TextField
                            id="outlined-select-currency"
                            variant="filled"
                            select
                            label="Section"
                            value={form.section}
                            onChange={(e) => setForm({...form, section:e.target.value})}
                            helperText="Please select valid details"
                        >
                            {['A','B'].map((option) => (
                                <MenuItem key={option} value={option}>
                                {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div  className={classes.pairOne}>
                    <TextField
                        id="outlined-select-currency"
                        variant="filled"
                        select
                        label="Sem"
                        value={form.oddOrEven}
                        onChange={(e) => setForm({...form, oddOrEven:e.target.value})}
                        helperText="Please select valid details"
                        >
                        {['ODD','EVEN'].map((option) => (
                            <MenuItem key={option} value={option}>
                            {option}
                            </MenuItem>
                        ))}
                        </TextField>
                        <TextField
                            id="outlined-select-currency"
                            variant="filled"
                            select
                            label="Year"
                            value={form.yearOfStudy}
                            onChange={(e) => setForm({...form, yearOfStudy:e.target.value})}
                            helperText="Please select valid details"
                        >
                            {_.range(1,5).map((option) => (
                                <MenuItem key={option} value={option}>
                                {option}
                                </MenuItem>
                            ))}
                        </TextField>
                        
                    </div>

                    <div className={classes.pairOne}>
                        <TextField
                            id="outlined-select-currency"
                            variant="filled"
                            select
                            label="PassedOut"
                            value={form.passedOut}
                            onChange={(e) => setForm({...form, passedOut:e.target.value})}
                            helperText="Please select valid details"
                        >
                            {_.range(year-4,year+8).map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>

                    <div className={classes.pairOne}>
                        <Button className={classes.submitBtn} onClick={handleOpen}>
                            Done
                        </Button>
                    </div>
                    </Box>
                    </form>
                </div>
            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle className={styles.alertDialogTitle}>
                    <h2>{`${form.dept} - ${form.section} - ${form.yearOfStudy} - ${form.passedOut}`}</h2>
                </DialogTitle>
                
                <DialogContent style={{
                    display:"flex",
                    justifyContent:"center"
                }}>
                    {(loading)?  <div className={styles.loading}>
                        <LoadingComponent />
                    </div> : null}
                </DialogContent>
                <DialogContent>
                    
                    <Card style={{backgroundColor:'grey'}}>
                        <CardContent>
                            <ol className={classes.ol}>
                                <li>
                                    Class Strength : {form.count}
                                </li>
                                <li>
                                    Starting R.No. : {form.startRno}
                                </li>
                                <li>
                                    Department  : {form.dept}
                                </li>
                                <li>
                                    Section : {form.section}
                                </li>
                                <li>
                                    Semaster : {form.oddOrEven}
                                </li>
                                <li>
                                    Year of study : {form.yearOfStudy}
                                </li>
                                <li>
                                    PassedOut year : {form.passedOut}
                                </li>
                            </ol>
                        </CardContent>
                    </Card>
                </DialogContent>

                
                <DialogActions>
                    <Button onClick={handleSubmit} autoFocus>
                        Submit
                    </Button>
                    <Button onClick={handleClose} autoFocus>
                        Close
                    </Button>
                    
                </DialogActions>
                
            </Dialog>
        </div>
        
    )
}

export default ClassCreation;
