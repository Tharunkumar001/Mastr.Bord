import { Box, Card, CardContent, CardHeader, CardMedia, LinearProgress, Typography } from "@material-ui/core";
import { makeStyles, StylesContext } from "@material-ui/styles";
import Image from "next/image";
import { useState } from "react";
import backgroundImage from "../../public/cardBack.jpg";
import PropTypes from 'prop-types';
import React from "react";

const useStyles = makeStyles((theme) => ({
    root:{
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        paddingTop: '3rem'
    },
    rootCard:{
        backgroundImage:`url(${backgroundImage})`,
        width:'250px', 
        height:'70vh',
    },

    innerCard: {
        display: "flex",
        flexDirection: 'row',
        gap: '1rem',
        margin: '0.2rem',
        justifyContent: 'center'
    },

    progress:{
        margin:'0.2rem'
    }
}));

    function LinearProgressWithLabel(props) {
        return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">{`${Math.round(
                props.value,
            )}%`}</Typography>
            </Box>
        </Box>
        );
    }

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};

const FlipCard = () => {
    const classes = useStyles();

    const [progress, setProgress] = useState(8);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);
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
                    title="@username"
                    subheader="Sem details"
                />
                <div className={classes.innerCard}>
                    <Card style={{width:'fit-content',}}>
                        <CardHeader
                            title="total"
                            subheader="44"
                        />
                    </Card>

                    <Card style={{width:'fit-content',}}>
                        <CardHeader
                            title="total"
                            subheader="44"
                        />
                    </Card>
                </div>
                
                <div className={classes.progress}>
                    <h4>Percentage</h4>
                    <LinearProgressWithLabel value={progress} />
                </div>
                
            </Card>
        </div>
    );
}

export default FlipCard;