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
        alignItems: 'center',
        flexDirection:'column',
        backgroundImage:`url(${backgroundImage})`,
        height:'fit-content',
    },
    rootCard:{
        backgroundImage:`url(${backgroundImage})`,
        width:'250px', 
        height:'fit-content',
    },

    innerCard: {
        display: "flex",
        flexDirection: 'row',
        gap: '1rem',
        margin: '0.2rem',
        justifyContent: 'center',
    },

    progress:{
        margin:'0.5rem'
    }
}));

    function LinearProgressWithLabel(props) {
        return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            
            <LinearProgress variant="determinate" {...props} />
            
            <Typography variant="body2" color="text.secondary">{`${Math.round(
                props.value,
            )}%`}</Typography>
            
        </Box>
        );
    }

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};

const FlipCard = () => {
    const classes = useStyles();

    const [progress, setProgress] = useState(80);


    return (
        <div className={classes.root}>
            <h2>#for logo</h2>
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
                    <Card style={{width:'fit-content', borderRadius: '1rem', boxShadow: '3px #888888'}}>
                        <CardHeader
                            title="total"
                            subheader="44"
                        />
                    </Card>

                    <Card style={{width:'fit-content',borderRadius: '1rem',  boxShadow: '1px #888888'
}}>
                        <CardHeader
                            title="present"
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