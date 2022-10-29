import { Card, CardContent, CardHeader, CardMedia } from "@material-ui/core";
import { makeStyles, StylesContext } from "@material-ui/styles";
import Image from "next/image";
import backgroundImage from "../../public/cardBack.jpg";

const useStyles = makeStyles((theme) => ({
    rootCard:{
        backgroundImage:`url(${backgroundImage})`,
        width:'250px', 
        height:'70vh',
    }
}))

const FlipCard = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className={classes.rootCard}>
                <CardMedia
                    component="img"
                    height="114"
                    image="/cardBack.jpg"
                    alt="Paella dish"
                />
                <CardHeader
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
            </Card>
        </div>
    );
}

export default FlipCard;