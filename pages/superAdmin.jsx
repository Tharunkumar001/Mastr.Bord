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
        
        backgroundImage: "linear-gradient(dodgerblue, dodgerblue), linear-gradient(silver, silver)",
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
            <Card className={classes.rootCard}>
                <div className={classes.superAdminCard} style={{}}>
                    <CardHeader title="@username" subheader="sueperadmin@gmail.com" />

                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'1rem'}}>
                        <Button className={classes.btn} 
                            onClick={() => setState(<Dashboard />)}
                        >
                            {(page)? `Admin`: <PersonAdd />}
                        </Button>
                        <Button className={classes.btn} 
                            onClick={() => setState(<ClassCreation />)}
                        >
                            {(page)? `Creation`: <BorderColor />}
                        </Button>
                        <Button className={classes.btn}
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
