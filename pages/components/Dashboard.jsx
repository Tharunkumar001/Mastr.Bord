import { Card, CardHeader, makeStyles } from "@material-ui/core";
import styles from "../../styles/Home.module.css";

const useStyles = makeStyles((theme) => ({
    
}));

const Dashboard = () => {
    const classes = useStyles();

    return(

    <div>
        <Card className={styles.superAdminCardRoot}>
            <div className={styles.superAdminCard}>
                <CardHeader title="@dashboard" subheader="sueperadmin@gmail.com" />
            </div>
        </Card>
    </div>
        
    )
}

export default Dashboard;
