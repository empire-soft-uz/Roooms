import React, { CSSProperties } from 'react'
import styles from "./infoItem.module.css"

interface Props {
    title?: string;
    url?: string;
    style?: CSSProperties;
    text?: any
}

const InfoItem: React.FC<Props> = ({
    title,
    url,
    style,
    text
}) => {
    return (
        <div className={styles.container} style={{ ...style }}>
            <div className={styles.iconBox}>
                <img src={url} alt="" />
            </div>
            <div className={styles.textBox}>
                <p className={styles.title}>{title}</p>
                <p className={styles.text}>{text}</p>
            </div>
        </div>
    )
}

export default InfoItem
