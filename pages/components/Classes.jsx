import { makeStyles } from "@material-ui/core";
import styles from "../../styles/Home.module.css";
import ClassCard from "../card/classesCard";
import logo from "../../public/mastr_bord_logo.png";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
    
}));

const Classes = () => {
    const classes = useStyles();
    
return(
    <div style={{marginBottom:"3rem"}}>
        <div style={{display:"flex", justifyContent:"center"}}>
            <Image
                src={logo}
                alt="Picture of the author"
                width={400}
                height={200}
            />
        </div>
    <h2 style={{textAlign:"center"}}>Classes</h2>

        <div className={styles.superAdminCardRoot}>                  
                <ClassCard />
        </div>
    </div>
)
}

export default Classes;
