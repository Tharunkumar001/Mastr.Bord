import { Badge, BottomNavigation, BottomNavigationAction, Button, ButtonGroup, Card, CardHeader, makeStyles } from "@material-ui/core";
import { BorderColor, LaptopWindows, PersonAdd } from "@material-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
import ClassCreation from "./components/classCreation";
import Classes from "./components/Classes";
import Dashboard from "./components/Dashboard";
import styles from "../styles/Home.module.css";


const useStyles = makeStyles((theme) => ({
    rootDiv:{  
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

        
    const [value,setValue] = useState()

    const [container, setContainer] = useState(<Dashboard />)



    function show(Value){

        switch (Value) {
            case 'Dashboard':
                setContainer(<Dashboard />);
                break;
            case 'Creation':
                setContainer(<ClassCreation />)
                break;
            case 'Classes':
                setContainer(<Classes />)
                break
            default:
                break;
        }
    }

    useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setPage( e.matches ));
    }, []);
    

    return(
        <div>

            {/* <h3>#for logo</h3>
            <Card style={{background: "linear-gradient(107deg, rgba(43,41,44,1) 0%, rgba(59,135,218,1) 0%, rgba(240,242,244,1) 100%, rgba(82,111,143,0) 100%)"}}>
                <div className={classes.rootDiv}>
                    <CardHeader title="@username" subheader="sueperadmin@gmail.com" />
                </div>
            </Card> */}

            <div>
                {container}
            </div>

            
            <BottomNavigation className={styles.bottomNav}
                style={{zIndex:"1"}}
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    show(newValue)
                }}
                showLabels
            >
                    <BottomNavigationAction  id="label" label="Dashboard" value="Dashboard" icon={<Badge  badgeContent={0} color="primary"><PersonAdd /></Badge>}/>
                    <BottomNavigationAction  id="label" label="Creation" value="Creation" icon={<Badge  badgeContent={0} color="primary"><BorderColor /></Badge>} />
                    <BottomNavigationAction  id="label" label="Classes" value="Classes" icon={<Badge  badgeContent={0} color="primary"><LaptopWindows /></Badge>} />
            </BottomNavigation>
        </div>
    )
}

export default SuperAdmin;
