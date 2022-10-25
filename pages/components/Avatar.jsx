import { makeStyles } from '@material-ui/core';
import Image from 'next/image';
import * as React from 'react';
import Avatar from "../../public/avatar.jpg";

const useStyles = makeStyles((theme) => ({
    avatar: {
        borderRadius: '50%',
        height: 'min-content'
    }
}))

export default function AvatarImage() {
    const classes = useStyles();
    return (
        <div>
            <Image src={Avatar} alt="Avatar" className={classes.avatar}/>
        </div>
    );
}
