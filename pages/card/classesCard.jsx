import { Card, CardContent, CardHeader, Dialog, DialogContent, DialogTitle, Divider, FormControlLabel, FormLabel, Grid, IconButton, makeStyles, Radio, RadioGroup } from "@material-ui/core"
import React from "react";
import { useState } from "react";
import Multiselect from 'multiselect-react-dropdown';
import { Button } from "react-bootstrap";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    dialogRoot:{
        display:"flex",
        flexDirection:"column",
        gap:"1rem",
        justifyContent:"center"
    },
    rowCss:{
        display:"flex",
        flexDirection:"row",
        gap:"1rem",
        justifyContent:"center"
    },
    colCss:{
        display:"flex",
        flexDirection:"column",
        gap:"1rem",
    }
}))

function ClassCard({ Component, pageProps }) {
    const classes = useStyles();
    const [state, setState] = useState();
    const [open, setOpen] = useState(false);

    const arrayRange = (start, stop, step) =>
        Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => `19CSR${start + index * step}`
    );

    var options = arrayRange(64, 125, 1);

    const handleCardClick = (x) => {
        handleOpen();
    }

    const handleClose = () => {
        setOpen(false);
    }
    
    const handleOpen = () => {
        setOpen(true);
    }   

    var selectedValue = [];

    const onSelect = (arrayList,selecteditem) => {
        selectedValue.push(selecteditem);
    }

    const onRemove = (arrayList,selecteditem) => {
        selectedValue = [...selecteditem, selectedValue];
    }

    return(
        <div>
            <Grid container spacing={2}>
                {[1,2,3,4,5].map((e,i) => {
                    return(
                        <Grid item xs={12} sm={4} md={4} key={i} >
                            <Card onClick={() => handleCardClick(e)}>
                                <CardHeader title={e} />
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
            
            
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullScreen
            >
                <DialogContent className={classes.dialogRoot}>
                    <DialogTitle 
                    style={{textAlign:"center", fontStyle:"bold",display:"flex",
                    flexDirection:"row",justifyContent:"center",}}>

                        <h3 style={{textAlign:"center"}}>Attendance Portal</h3>

                        <IconButton color="secondary" aria-label="add an alarm" onClick={handleClose}>
                            <Close />
                        </IconButton>                
                    </DialogTitle>

                    <DialogContent>
                        <form>
                            <div className={classes.rowCss}>
                                <input type="date" style={{border:"none", outline:"none"}}/>

                                <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="FN" control={<Radio />} label="FN" />
                                <FormControlLabel value="AN" control={<Radio />} label="AN" />
                            </RadioGroup>
                            </div>
                            <div className={classes.colCss}>
                                <label style={{fontWeight:"bold"}}>Select Absentees from dropdown</label>
                                <Multiselect
                                    options={options}
                                    loading={false}
                                    selectedValues={selectedValue} // Preselected value to persist in dropdown
                                    onSelect={onSelect} // Function will trigger on select event
                                    onRemove={onRemove} // Function will trigger on remove event
                                    isObject={false}
                                    
                                    // Property name to display in the dropdown options
                                />

                                <label><input type="checkbox" required />Comfirm</label>
                                <label style={{fontWeight:"bold"}}>Enter Valid class password</label>

                                <input type="password" required style={{borderRadius:"0.5rem",padding:"0.5rem", marginRight:"0.3rem",width:"fit-content"}}/>
                                <button style={{width:"fit-content",borderRadius:"0.5rem",padding:"0.5rem"}}>Submit</button>
                            
                            </div>
                        
                        </form>
                    </DialogContent>
                </DialogContent>
            </Dialog>
            
            {/* <DialogTitle 
                style={{textAlign:"center", fontStyle:"bold",display:"flex",
                flexDirection:"row",justifyContent:"center",}}>

                <h3 style={{textAlign:"center"}}>Attendance Portal</h3>

                <IconButton color="secondary" aria-label="add an alarm" onClick={handleClose}>
                    <Close />
                </IconButton>                
                </DialogTitle>

                <DialogContent style={{display:"flex", alignItems:"center",flexDirection:"column", gap:'1rem'}}>
                    <div style={{display:"flex", flexDirection:"row", gap:'1rem'}}>
                        <h4>Class</h4>
                        <h4>Strength</h4>
                        <h4>Admin</h4>
                    </div>

                    <div style={{display:"flex", flexDirection:"column", gap:'1rem'}}>
                        <label>Enter Period Details</label>
                        <div style={{display:"flex",alignItems:"center", flexDirection:"row", gap:'1rem'}}>
                            <input type="date" style={{border:"none", outline:"none"}}/>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="FN" control={<Radio />} label="FN" />
                                <FormControlLabel value="AN" control={<Radio />} label="AN" />
                            </RadioGroup>
                        </div>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", gap:'1rem'}}>
                        <label>Select Absentees from dropdown</label>
                        <Multiselect
                            options={options}
                            loading={false}
                            selectedValues={selectedValue} // Preselected value to persist in dropdown
                            onSelect={onSelect} // Function will trigger on select event
                            onRemove={onRemove} // Function will trigger on remove event
                            isObject={false}
                            
                            // Property name to display in the dropdown options
                        />
                        <label><input type="checkbox" required />Comfirm</label>
                        <label>Enter Valid class password</label>

                        <form>
                            <input type="password" required style={{borderRadius:"0.5rem",padding:"0.5rem", marginRight:"0.3rem"}}/>
                            <button style={{width:"fit-content",borderRadius:"0.5rem",padding:"0.5rem"}}>Submit</button>

                        </form>
                    </div>
                </DialogContent>

                <DialogContent>
                </DialogContent>
                
            </Dialog> */}


        </div>

    )
}

export default ClassCard
