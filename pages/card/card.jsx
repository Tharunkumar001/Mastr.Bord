import { Card, CardHeader } from "@material-ui/core";
import { makeStyles, StylesContext } from "@material-ui/styles";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const useStyles = makeStyles((theme) => ({
    rootCard:{
        width: '250px',
        height: '400px'
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
                        <h1>front</h1>
                    </Card>

                    <Card className={classes.rootCard}>
                        <h1>front</h1>
                    </Card>
            </ReactCardFlip>
        </div>
    );
}

export default FlipCard;