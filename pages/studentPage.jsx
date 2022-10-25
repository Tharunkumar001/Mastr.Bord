import { Button, Card, CardContent, CardHeader, Collapse, IconButton, List, ListItem, ListItemIcon, ListItemText, ListSubheader, makeStyles, Typography } from '@material-ui/core'
import { Comment, CommentOutlined, ExpandLess, ExpandMore, StarBorder } from '@material-ui/icons';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import AvatarImage from './components/Avatar';

const useStyles = makeStyles((theme) => ({
    card: {
        width: 'fit-content',
        padding: '1rem',
        textAlign: 'center',
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

                <div>
                <List>
                    {[['D','t','s'],[1, 2, 3]].map((value,index) => (
                        <ListItem
                            key={value}
                        >
                        <ListItemText primary={`${value[0][0]} ${value[0][0]}`} />
                        </ListItem>
                    ))}
                    </List>
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
