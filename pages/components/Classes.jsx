import { Card, CardHeader, Grid, makeStyles } from "@material-ui/core";
import styles from "../../styles/Home.module.css";
import ClassCard from "../card/classesCard";

const useStyles = makeStyles((theme) => ({
    
}));

const Classes = () => {
    const classes = useStyles();
    
return(
    <div >
        <div className={styles.superAdminCardRoot}>                  
            <div className={styles.superAdminCard}>
                <ClassCard />
            </div>
        </div>
    </div>
)
}

export default Classes;
