import { Card, CardHeader, makeStyles } from "@material-ui/core";
import styles from "../../styles/Home.module.css";

const useStyles = makeStyles((theme) => ({
    
}));

const Classes = () => {
    const classes = useStyles();

return(
    <div>
        <Card className={styles.superAdminCardRoot}>
            <div className={styles.superAdminCard}>
                <CardHeader title="@classes" subheader="sueperadmin@gmail.com" />
            </div>
        </Card>
    </div>
)
}

export default Classes;
