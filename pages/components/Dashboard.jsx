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

const useStyles = makeStyles((theme) => ({
    submitBtn:{
        font: "1em Arial, sans-serif",
            display: "inline-block",
            padding: "1em",
            margin: "1em",
            textDecoration: "none",
            borderRadius:'0.5rem',
            backgroundImage: "linear-gradient(dodgerblue, dodgerblue), linear-gradient(silver, silver)",
            backgroundSize:" 0 5px, auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
            transition:" all .2s ease-out",
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
        <Card className={styles.superAdminCardRoot}>
            <div className={styles.superAdminCard}>
                <CardContent style={{display:"flex", flexDirection:"row"}}>
                    <CardHeader title="@dashboard" subheader="sueperadmin@gmail.com" />
                    <Button className={classes.submitBtn} onClick={handleOpen}>
                        Access
                    </Button>
                </CardContent>
                
                <CardContent>
                <Divider />
                
                <div className={classes.navBtnDiv}>
                    <Button className={classes.navBtn} onClick={() => setStats(<ClassStats />)}>
                        Class
                    </Button>
                    <Button className={classes.navBtn} onClick={() => setStats(<CreationStats />)}>
                        Creation
                    </Button>
                    <Button className={classes.navBtn} onClick={() => setStats(<Grievence />)}>
                        Grievence
                    </Button>
                </div>
                </CardContent>

                <CardContent>
                    {stats}
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
                    <Button className={classes.submitBtn} onClick={() => setForm(<CoAdmin />)}>
                        Co-Admin
                    </Button>
                    <Button className={classes.submitBtn} onClick={() => setForm(<FacultyAdmin />)}>
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
