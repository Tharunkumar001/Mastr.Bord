import { Card, CardContent, CardHeader } from "@material-ui/core";
import { PersonAdd } from "@material-ui/icons";
import { makeStyles, StylesContext } from "@material-ui/styles";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const useStyles = makeStyles((theme) => ({
    rootCard:{
        width: '250px',
        height: '400px',
        borderRadius: '0.5rem',
        background: "linear-gradient(107deg, rgba(43,41,44,1) 0%, rgba(59,135,218,1) 0%, rgba(240,242,244,1) 100%, rgba(82,111,143,0) 100%)",

    },

    content:{
        
    },

    innerCard:{
        width: '220px',
        height: '350px',
        padding: '0.5rem'
    },

    iconHeader:{
        display: 'flex',
        flexDirection: 'row'
    }
}))

const FlipCard = () => {
    const [flip, setFlip] = useState(false);
    const classes = useStyles();

    return (
        <div>
            <ReactCardFlip isFlipped={flip} 
                flipDirection="vertical">
                    
                    <Card className={classes.rootCard}>
                        <CardContent className={classes.content}>
                            <Card className={classes.innerCard}>
                                <CardContent className={classes.iconHeader}>
                                    <h2>@username</h2>
                                </CardContent>

                                <CardContent>
                                    <h3>22</h3>
                                    <span>present Days</span>

                                    <h4>total days</h4>
                                    <h4>total days</h4>
                                    <h4>total days</h4>
                                </CardContent>
                            </Card>
                        </CardContent>
                    </Card>

                    <Card className={classes.rootCard}>
                        <h1>front</h1>
                    </Card>
            </ReactCardFlip>
        </div>
    );
}

export default FlipCard;