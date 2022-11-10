import { Card, CardHeader, Grid, makeStyles } from "@material-ui/core";
import styles from "../../styles/Home.module.css";
import ClassCard from "../card/classesCard";

const useStyles = makeStyles((theme) => ({
    
}));

const Classes = () => {
    const classes = useStyles();

return(
    <div>
        <Card>
            <div>
                {[1,2].map((e,i) => <ClassCard key={i} />)}
            </div>
        </Card>
    </div>
)
}

export default Classes;
