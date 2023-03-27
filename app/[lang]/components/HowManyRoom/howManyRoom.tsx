import React from 'react'
import styles from "./howManyRoom.module.css"

interface Props {
    room?: string;
    kitchen?: string;
    bedroom?: string;
    hall?: string;
}

const HowManyRoom: React.FC<Props> = ({
    room,
    kitchen,
    bedroom,
    hall
}) => {
    return (
        <div className={styles.box}>
            <p>{room}</p>
            <div className={styles.dot}></div>
            <p>{kitchen}</p>
            <div className={styles.dot}></div>
            <p>{bedroom}</p>
            <div className={styles.dot}></div>
            <p>{hall}</p>
        </div>
    )
}

export default HowManyRoom
