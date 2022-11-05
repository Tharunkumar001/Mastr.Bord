import { Card, CardHeader, makeStyles, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import styles from "../../styles/Home.module.css";

import React from 'react';


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
            justifyContent:"center",
            alignItems:"center",
            gap:'1rem',
            padding:'1rem'
        }
    },

}))

const ClassCreation = () => {

    const classes = useStyles();
    const [ value, setValue ] = useState(10); 
    const [form, setForm] = React.useState({count:0, dept:'CSE', startRno:1, section:'A', yearOfStudy:4, oddOrEven:'ODD' });

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return(
        
        <div>
            <Card className={styles.superAdminCardRoot}>
                <h2 style={{textAlign:"center"}}>Class Creation Form</h2>
                <div className={classes.form}>
                    <form>
                        <div className={classes.pairOne}>
                            <div>
                                <TextField id="outlined-basic" label="Count" variant="outlined" />
                            </div>
                            
                            <div>
                                <TextField id="outlined-basic" label="Starting R.NO" variant="outlined" />
                            </div>
                        </div>
                        
                        <div className={classes.pairOne}>
                            <div>
                            <TextField
                                    id="outlined-basic"
                                    select
                                    label="Select"
                                    value={form.dept}
                                    onChange={(e) => setForm({...form, dept: e.target.value})}
                                    helperText="Please select your department"
                                    variant="outlined"
                                >
                                {['CSE','IT'].map((option,index) => (
                                    <MenuItem key={index} value={option}>
                                    {option}
                                    </MenuItem>
                                ))}
                            </TextField>                            
                            </div>
                            
                            <div>
                            <TextField
                                    id="outlined-basic"
                                    select
                                    label="Select"
                                    value={form.oddOrEven}
                                    onChange={(e) => setForm({...form, oddOrEven: e.target.value})}
                                    helperText="Please select sem details"
                                    variant="outlined"
                                >
                                {["ODD","EVEN"].map((option,index) => (
                                    <MenuItem key={index} value={option}>
                                    {option}
                                    </MenuItem>
                                ))}
                            </TextField>     
                            </div>
                        </div>

                        <div className={classes.pairOne}>
                            <div>
                            <TextField
                                    id="outlined-basic"
                                    select
                                    label="Select"
                                    value={form.section}
                                    onChange={(e) => setForm({...form, section: e.target.value})}
                                    helperText="Please select section of class"
                                    variant="outlined"
                                >
                                {["A","B"].map((option,index) => (
                                    <MenuItem key={index} value={option}>
                                    {option}
                                    </MenuItem>
                                ))}
                            </TextField>                                 </div>
                            
                            <div>
                            <TextField
                                    id="outlined-basic"
                                    select
                                    label="Select"
                                    value={form.yearOfStudy}
                                    onChange={(e) => setForm({...form, yearOfStudy: e.target.value})}
                                    helperText="Please select year of study"
                                    variant="outlined"
                                >
                                {[1,2,3,4].map((option,index) => (
                                    <MenuItem key={index} value={option}>
                                    {option}
                                    </MenuItem>
                                ))}
                            </TextField>                                 </div>
                        </div>
                    </form>
                </div>
            </Card>
        </div>
        
    )
}

export default ClassCreation;
