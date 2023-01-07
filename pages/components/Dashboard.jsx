import { Button, Card, CardActions, CardContent, CardHeader, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, makeStyles, MenuItem, TextField } from "@material-ui/core";
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
import classImg from "../../public/classImg.jpg";
import statsImg from "../../public/stats.jpg";
import Admin from "../../public/Admin.png";

const useStyles = makeStyles((theme) => ({
    accessBtn:{
        borderRadius:"0.5rem",
        paddingtop:"0.5rem",
        paddingBottom:"0.5rem",
        paddingLeft:"1rem",
        paddingRight:"1rem",
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

    statsCard:{
        width:"fit-content",
        backgroundColor:"#6ea0eb"
        // opacity:"0.7"
    },

    cardDiv:{
        display:"flex",
        flexDirection:"column",
        gap:"1rem",
        margin:"2rem",
        justifyContent:"center",

        [theme.breakpoints.up('sm')]: {
            flexDirection:"row",
            margin:"2rem",
            justifyContent:"center",
        },
    },
    
    backImg:{
        zIndex:'-2',
        
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
        <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
        <h2 style={{textAlign:"center"}}>Dashboard</h2>
        {/* <Button variant="outlined" className={classes.accessBtn} startIcon={<TouchApp />} 
                onClick={handleOpen}
            >
                Access
            </Button> */}
        </div>

        <div className={classes.cardDiv}>
            <Card className={classes.statsCard}>
                <CardHeader title="Class Stats" />
                <CardActions style={{display:"flex",justifyContent:"center"}}>
                {/* <Button variant="outlined"  className={classes.accessBtn} startIcon={<TouchApp />} /> */}
                <IconButton>
                    <TouchApp />
                </IconButton>
                </CardActions>
                <CardContent style={{margin:"0.5rem"}}>
                    <Image src={classImg} alt="classImg" width={300} height={100} />
                </CardContent>
            </Card>

            <Card className={classes.statsCard}>
                <CardHeader title="Admin Panel" />
                <CardActions style={{display:"flex",justifyContent:"center"}}>
                    <IconButton>
                        <TouchApp />
                    </IconButton>
                </CardActions>
                <CardContent style={{margin:"0.5rem"}}>
                    <Image src={Admin} alt="classImg" width={300} height={100} />
                </CardContent>
            </Card>

            <Card className={classes.statsCard}>
                <CardHeader title="Students Portal" />
                <CardActions style={{display:"flex",justifyContent:"center"}}>
                    <IconButton>
                        <TouchApp />
                    </IconButton>
                </CardActions>
                <CardContent style={{margin:"0.5rem"}}>
                    <Image src={statsImg} alt="classImg" width={300} height={100} />
                </CardContent>
            </Card>
        </div>

            {/* <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle style={{textAlign:"center", fontStyle:"bold",}}>
                    Access Toggle
                </DialogTitle>
                
                <DialogContent className={styles.alertDialogContent}>
                    <Button variant="outlined" className={classes.accessBtn}  onClick={() => setForm(<CoAdmin />)}>
                        Co-Admin
                    </Button>
                    <Button variant="outlined" className={classes.accessBtn}  onClick={() => setForm(<FacultyAdmin />)}>
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
                
            </Dialog> */}
    </div>
        
    )
}

export default Dashboard;
