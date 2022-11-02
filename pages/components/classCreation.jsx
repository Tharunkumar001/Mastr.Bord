import { Card, CardHeader, makeStyles } from "@material-ui/core";
import { useState } from "react";
import InputRange from "react-input-range";
import styles from "../../styles/Home.module.css";
import 'react-input-range/lib/css/index.css';

const useStyles = makeStyles((theme) => ({
    
}))

const ClassCreation = () => {
    const classes = useStyles();
    const [state, setState] = useState(0);

    return(
        
        <div>
            <Card className={styles.superAdminCardRoot}>
                <div className={styles.superAdminCard}>
                <CardHeader title="@creation" subheader="sueperadmin@gmail.com" />
                    <div className={styles.form}>
                        <InputRange
                            maxValue={10}
                            minValue={0}
                            value={state}
                            onChange={value => setState({ value })} 
                        />
                    </div>
                    
                
                </div>
            </Card>
        </div>
        
    )
}

export default ClassCreation;
