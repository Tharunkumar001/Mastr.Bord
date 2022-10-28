import { Card, CardContent, CardHeader, CardMedia } from "@material-ui/core";
import { makeStyles, StylesContext } from "@material-ui/styles";
import backgroundImage from "../../public/cardBack.jpg";

const useStyles = makeStyles((theme) => ({
    rootCard:{
        width:'250px', 
        height:'50vh',
    }
}))

const FlipCard = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className={classes.rootCard}>
                <CardHeader
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                </Card>
        </div>
    );
}

export default FlipCard;