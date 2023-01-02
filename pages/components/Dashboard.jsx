import { Card, CardContent, CardHeader, Dialog, DialogActions, DialogContent, DialogTitle, Divider, makeStyles, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import { Button } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import CoAdmin from "../Form/CoAdmin";
import FacultyAdmin from "../Form/FacultyAdmin";
import { BorderColor, LaptopWindows, PersonAdd, PersonPinCircle } from "@material-ui/icons";
import ClassStats from "./Stats/ClassStats";
import CreationStats from "./Stats/CreationStats";
import Grievence from "./Stats/Grievence";
import SwitchTabs from "./TabComponents";

const useStyles = makeStyles((theme) => ({
    submitBtn:{
        width:"fit-content",
        borderRadius:"0.5rem",
        padding:"0.5rem",
        marginLeft:"1rem"
    },
    navBtnDiv:{
        display:"flex",
        flexDirection:"row",
        gap:"1rem",
        justifyContent:"center",
        alignItems:"center",
        paddingTop:"1rem"
    },
    navBtn:{
        padding:"0.3rem",
        borderRadius:"0.4rem"
    },
    rootCard:{
        width:"95%",
        height: "90hv",
        margin:"1rem",
        marginRight:"auto",
        marginLeft:"auto",
        background: "linear-gradient(107deg, rgba(43,41,44,1) 0%, rgba(59,135,218,1) 0%, rgba(240,242,244,1) 100%, rgba(82,111,143,0) 100%)"

    }
}));

const Dashboard = () => {
    
    const classes = useStyles();
    const [data,setData] = useState({coAdmin:'',classAdmin:''});
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState("Select Access Form");
    const [stats, setStats] = useState();

    const handleAccess = () => {

    }

    const handleSubmit = () => {

    }

    const handleClose = () => {
        setOpen(false);
    }
    
    const handleOpen = () => {
        setOpen(true);
    }

    return(

    <div>
        <Card className={classes.rootCard}>
            <div className={styles.superAdminCard}>
                <CardContent style={{display:"flex", flexDirection:"column"}}>
                    <CardHeader title="@dashboard" subheader="sueperadmin@gmail.com" />
                    <Button className={classes.submitBtn} onClick={handleOpen}>
                        Access
                    </Button>
                </CardContent>
                
                <CardContent>
                <Divider />
                
                <div>
                    <SwitchTabs />
                </div>
                </CardContent>
            </div>
        </Card>


            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle style={{textAlign:"center", fontStyle:"bold",}}>
                    Access Toggle
                </DialogTitle>
                
                <DialogContent className={styles.alertDialogContent}>
                    <Button style={{borderRadius:"0.5rem",padding:"0.3rem"}} onClick={() => setForm(<CoAdmin />)}>
                        Co-Admin
                    </Button>
                    <Button style={{borderRadius:"0.5rem",padding:"0.3rem"}} onClick={() => setForm(<FacultyAdmin />)}>
                        Faculty Admin
                    </Button>
                </DialogContent>

                <DialogContent>
                    {form}
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={handleSubmit} className={classes.navBtn} autoFocus>
                        Submit
                    </Button>
                    <Button onClick={handleClose} className={classes.navBtn} autoFocus>
                        Close
                    </Button>
                    
                </DialogActions>
                
            </Dialog>
    </div>
        
    )
}

export default Dashboard;
