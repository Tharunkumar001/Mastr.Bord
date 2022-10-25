import { Button, Card, CardContent, CardHeader, Collapse, IconButton, List, ListItem, ListItemIcon, ListItemText, ListSubheader, makeStyles, Typography } from '@material-ui/core'
import { Comment, CommentOutlined, ExpandLess, ExpandMore, ListAlt, StarBorder } from '@material-ui/icons';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import AvatarImage from './components/Avatar';

const useStyles = makeStyles((theme) => ({
    card: {
        width: 'max-content',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    root: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '5rem'
    },

    btn: {
        padding: '1rem',
        borderRadius: '0.4rem',
        
    },

    backCard: {
        padding: '0.4rem'
    },

    ul: {
        listStyleType: "square",
        display: 'flex',
        gap: '1rem',
        flexDirection: 'column',
        fontSize: '1.3rem',
        fontWeight: 'bold'
    }
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

            <Card className={styles.card}>
            <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
                <div>
                    <AvatarImage />
                    <h4>Students Stats</h4>
                    <button onClick={handleClick} className={styles.btn}>
                        Click to flip
                    </button>
                </div>

                <div className={styles.backCard}>
                    <h4>show sem details</h4>
                    <ul className={styles.ul}>
                        <li>Days</li>
                        <li>Present</li>
                        <li>Absent</li>
                        <li>Percentage</li>
                    </ul>
                    <button onClick={handleClick} className={styles.btn}>
                        Flip to stats
                    </button>
                </div>
            </ReactCardFlip>
                
                </Card>
        </div>
    )
}

export default StudentPage
