import { Card, CardHeader, makeStyles } from "@material-ui/core";
import { useState } from "react";
import styles from "../../styles/Home.module.css";

import React from 'react';
import RangeSlider from 'react-bootstrap-range-slider';


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

    return(
        
        <div>
            <Card className={styles.superAdminCardRoot}>
                <h2 style={{textAlign:"center"}}>Class Creation Form</h2>
                <div className={classes.form}>
                    <form>
                        <div className={classes.pairOne}>
                            <Card>
                                <label 
                                    style={{fontStyle:"bold",fontSize:"1.3rem"}}
                                >Count
                                <RangeSlider
                                    value={value}
                                    onChange={changeEvent => setValue(changeEvent.target.value)}
                                />
                                </label>
                            </Card>
                            
                            <Card>
                                <label 
                                    style={{fontStyle:"bold",fontSize:"1.3rem"}}
                                >Count
                                <RangeSlider
                                    value={value}
                                    onChange={changeEvent => setValue(changeEvent.target.value)}
                                />
                                </label>
                            </Card>
                        </div>
                        
                        <div className={classes.pairOne}>
                            <Card>
                                <label 
                                    style={{fontStyle:"bold",fontSize:"1.3rem"}}
                                >Count
                                <RangeSlider
                                    value={value}
                                    onChange={changeEvent => setValue(changeEvent.target.value)}
                                />
                                </label>
                            </Card>
                            
                            <Card>
                                <label 
                                    style={{fontStyle:"bold",fontSize:"1.3rem"}}
                                >Count
                                <RangeSlider
                                    value={value}
                                    onChange={changeEvent => setValue(changeEvent.target.value)}
                                />
                                </label>
                            </Card>
                        </div>

                        <div className={classes.pairOne}>
                            <Card>
                                <label 
                                    style={{fontStyle:"bold",fontSize:"1.3rem"}}
                                >Count
                                <RangeSlider
                                    value={value}
                                    onChange={changeEvent => setValue(changeEvent.target.value)}
                                />
                                </label>
                            </Card>
                            
                            <Card>
                                <label 
                                    style={{fontStyle:"bold",fontSize:"1.3rem"}}
                                >Count
                                <RangeSlider
                                    value={value}
                                    onChange={changeEvent => setValue(changeEvent.target.value)}
                                />
                                </label>
                            </Card>
                        </div>
                    </form>
                </div>
            </Card>
        </div>
        
    )
}

export default ClassCreation;
