import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import Card from "./card/card";

const useStyles = makeStyles((theme) => ({


    root: {
        display: 'flex',
        justifyContent: 'center',
    },
}))

function StudentPage() {
    const [flip, setFlip] = useState(false);
    const styles = useStyles();

    function handleClick(e) {
        e.preventDefault();
        setFlip(!flip);
    }

    return(
        <div className={styles.root}>
            <Card />
        </div>
    )
}

export default StudentPage
