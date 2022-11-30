import { Button, ButtonGroup, Card, CardHeader, makeStyles } from "@material-ui/core";
import { BorderColor, LaptopWindows, PersonAdd, PersonPinCircle } from "@material-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
import ClassCreation from "./components/classCreation";
import Classes from "./components/Classes";
import Dashboard from "./components/Dashboard";
import styles from "../styles/Home.module.css";

const useStyles = makeStyles((theme) => ({
    
    btn:{
        font: "1em Arial, sans-serif",
        display: "inline-block",
        padding: "1em",
        margin: "1em",
        textDecoration: "none",
        backgroundImage: "linear-gradient(dodgerblue, dodgerblue)",
        backgroundSize:" 0 5px, auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        transition:" all .2s ease-out",
        "&:hover":{
            backgroundSize: "100% 5px, auto",
        }
    },
    superAdminCard:{  
        display:"flex", 
        flexDirection:"column",
        [theme.breakpoints.up('sm')]: {
            flexDirection:"row",
        },
    },
    rootCard:{
        background: "linear-gradient(107deg, rgba(43,41,44,1) 0%, rgba(59,135,218,1) 0%, rgba(240,242,244,1) 100%, rgba(82,111,143,0) 100%)"
    }

}))

const SuperAdmin = () => {
    const classes = useStyles();
    
    const [page, setPage] = useState(true);
    const [state, setState] = useState();

    useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setPage( e.matches ))
    }, []);
    
    return(
        <div className={styles.superAdminCardRoot}>
            <h3>#for logo</h3>
            <Card style={{background: "linear-gradient(107deg, rgba(43,41,44,1) 0%, rgba(59,135,218,1) 0%, rgba(240,242,244,1) 100%, rgba(82,111,143,0) 100%)"}}>
                <div className={classes.superAdminCard}>
                    <CardHeader title="@username" subheader="sueperadmin@gmail.com" />
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'1rem'}}>
                        <Button className={styles.btn} 
                            onClick={() => setState(<Dashboard />)}
                        >
                            {(page)? `Admin`: <PersonAdd />}
                        </Button>
                        <Button className={styles.btn} 
                            onClick={() => setState(<ClassCreation />)}
                        >
                            {(page)? `Creation`: <BorderColor />}
                        </Button>
                        <Button className={styles.btn}
                            onClick={() => setState(<Classes />)}
                        >
                            {(page)? `classes`: <LaptopWindows />}
                        </Button>
                    </div>
                </div>
            </Card>

            <div>
                {state}
            </div>
        </div>
    )
}

export default SuperAdmin;
