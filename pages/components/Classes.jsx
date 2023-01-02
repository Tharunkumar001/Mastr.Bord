import { Card, CardHeader, Grid, makeStyles } from "@material-ui/core";
import styles from "../../styles/Home.module.css";
import ClassCard from "../card/classesCard";

const useStyles = makeStyles((theme) => ({
    
}));

const Classes = () => {
    const classes = useStyles();
    
return(
    <div style={{marginBottom:"3rem"}}>
        <div className={styles.superAdminCardRoot}>                  
                <ClassCard />
        </div>
    </div>
)
}

export default Classes;
