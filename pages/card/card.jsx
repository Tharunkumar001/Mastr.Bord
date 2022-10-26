import styles from "../../styles/Home.module.css";

function Card({onClick}) {
    return (
        <div className={styles.card} onClick={onClick}>
            <div className={styles.cardback}>Back</div>
            <div className={styles.cardfront}>Front</div>
        </div>
    );
}

export default Card;