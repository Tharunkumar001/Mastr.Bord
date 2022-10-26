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
            
        </div>
    )
}

export default StudentPage
