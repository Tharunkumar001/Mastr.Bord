import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Card from "./card/card";
import styles from "../styles/Home.module.css";

function FlippableCard() {
    const [showFront, setShowFront] = useState(true);
    return(
        <div className={styles.flippablecardcontainer}>
            <CSSTransition
                in={showFront}
                timeout={300}
                classNames={styles.flip}
            >
                <Card onClick={() => {
                    setShowFront((v) => !v);
                }}/>
            </CSSTransition>
        </div>
    );
}

export default FlippableCard;