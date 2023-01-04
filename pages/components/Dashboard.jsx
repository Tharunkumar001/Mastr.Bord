import { Button, Card, CardContent, CardHeader, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, makeStyles, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import CoAdmin from "../Form/CoAdmin";
import FacultyAdmin from "../Form/FacultyAdmin";
import { BorderColor, LaptopWindows, PersonAdd, PersonPinCircle, TouchApp } from "@material-ui/icons";
import ClassStats from "./Stats/ClassStats";
import CreationStats from "./Stats/CreationStats";
import Grievence from "./Stats/Grievence";
import SwitchTabs from "./TabComponents";
import Image from "next/image";
import logo from "../../public/mastr_bord_logo.png";

const useStyles = makeStyles((theme) => ({

    accessBtn:{
        backgroundColor:"#006ff7",
        borderRadius:"0.5rem",
        paddingtop:"0.5rem",
        paddingBottom:"0.5rem",
        paddingLeft:"1rem",
        paddingRight:"1rem",
        color:"white",
        hover:"none"
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
        width:"100%",
        height: "90hv",
        margin:"1rem",
        marginRight:"auto",
        marginLeft:"auto",
        // background: "linear-gradient(107deg, rgba(43,41,44,1) 0%, rgba(59,135,218,1) 0%, rgba(240,242,244,1) 100%, rgba(82,111,143,0) 100%)"

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
        <div style={{display:"flex", justifyContent:"center"}}>
            <Image
                src={logo}
                alt="Picture of the author"
                width={400}
                height={200}
            />
        </div>

        <div  style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h2 style={{textAlign:"center"}}>Dashboard</h2>

            <Button variant="outlined" startIcon={<TouchApp />} className={classes.accessBtn}
                onClick={handleOpen}
            >
                Access
            </Button>
        </div>

            <div className={styles.superAdminCard}>
                
                <CardContent>
                    <Divider />
                    <div>
                        <SwitchTabs />
                    </div>
                </CardContent>
            </div>

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
                    <Button className={classes.accessBtn} onClick={() => setForm(<CoAdmin />)}>
                        Co-Admin
                    </Button>
                    <Button className={classes.accessBtn} onClick={() => setForm(<FacultyAdmin />)}>
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
