import { Box, Card, CardHeader, makeStyles, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import styles from "../../styles/Home.module.css";

import React from 'react';
import * as _ from "lodash";


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
            padding:'1.5rem',            
        }
    },

    form:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

    }

}))

const ClassCreation = () => {

    const classes = useStyles();
    const [ value, setValue ] = useState(10); 
    const [form, setForm] = React.useState({count:0, dept:'CSE', startRno:1, section:'A', yearOfStudy:4, oddOrEven:'ODD' });

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const count = _.range(1, 66).map((item) => {
        return { value: item };
    });

    const rollNo = [1,60,61,62,63,64,65,66,67,68,69,70]
    return(
        
        <div>
            <Card className={styles.superAdminCardRoot}>
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
                            {count.map((option,ind) => (
                                <MenuItem key={ind} value={option.value}>
                                    {option.value}
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
                    </Box>
                    </form>
                </div>
            </Card>
        </div>
        
    )
}

export default ClassCreation;
