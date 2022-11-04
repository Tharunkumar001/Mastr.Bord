import { Card, CardHeader, makeStyles, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import styles from "../../styles/Home.module.css";

import React from 'react';
import RangeSlider from 'react-bootstrap-range-slider';

const currencies = [
    {
        value: 'CSE',
        label: 'CSE',
    },
    {
        value: 'IT',
        label: 'IT',
    },
    ];

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
    const [form, setForm] = React.useState({count:0, dept:'CSE', startRno:1, Section:'A', YearOfStudy:4, });

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
                                    value={currency}
                                    onChange={() => {
                                        
                                    }}
                                    helperText="Please select your department"
                                    variant="outlined"
                                >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>                            
                            </div>
                            
                            <div>
                            <TextField
                                    id="outlined-basic"
                                    select
                                    label="Select"
                                    value="ODD/EVEN"
                                    onChange={() => {

                                    }}
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
                                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            </div>
                            
                            <div>
                                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            </div>
                        </div>
                    </form>
                </div>
            </Card>
        </div>
        
    )
}

export default ClassCreation;
