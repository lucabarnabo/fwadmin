import { MdSupervisedUserCircle } from "react-icons/md"
import styles from "./card.module.css"

const Card = () => {
    return (
        <div className={styles.container}>
            <MdSupervisedUserCircle />
            <div className={styles.texts}>
 <span className={styles.title}>Active Users</span>
                <span className={styles.number}>12000</span>
                 <span className={styles.detail}>
                <span className={styles.positive}>12%</span> dsadsa
             </span>
                </div>
        </div>
    )
}

export default Card