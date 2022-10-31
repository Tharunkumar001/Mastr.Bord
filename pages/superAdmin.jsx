import { Button, ButtonGroup, Card, CardHeader, makeStyles } from "@material-ui/core";
import { BorderColor, LaptopWindows, PersonAdd, PersonPinCircle } from "@material-ui/icons";
import { useEffect } from "react";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    root:{
        width:'90%',
        height:'80hv',
        margin:'1rem',
        marginRight:'auto',
        marginLeft:'auto'
        
    },
    card:{
        display:'flex',
        flexDirection:'column',

        [theme.breakpoints.up('sm')]: {
            flexDirection:'row'
        },
    },

    btn:{
        
    }
}))

const SuperAdmin = () => {
    const classes = useStyles();
    
    const [page, setPage] = useState(
        window.matchMedia("(max-width: 768px)").matches
    );

    useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setPage( e.matches ));
    }, []);

    return(
        <div className={classes.root}>
            <h3>#for logo</h3>
            <Card className={classes.rootCard}>
                <div className={classes.card}>
                    <CardHeader title="@username" subheader="sueperadmin@gmail.com" />

                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'1rem'}}>
                        <Button className={classes.btn}>
                            {(page)? `Admin`: <PersonAdd />}
                        </Button>
                        <Button className={classes.btn}>
                            {(page)? `Creation`: <BorderColor />}
                        </Button>
                        <Button className={classes.btn}>
                            {(page)? `classes`: <LaptopWindows />}
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default SuperAdmin;
