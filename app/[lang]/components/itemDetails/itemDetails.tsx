import React from 'react'
import styles from "./itemDetails.module.css"

interface Props {
    size?: string;
    many?: string;
    floor?: string;
}

const ItemDetails: React.FC<Props> = ({
    size,
    many,
    floor,
}) => {
    return (
        <div className={styles.centerBox}>
            <div className={styles.infoBox}>
                <div className={styles.info}>
                    <img src="/icons/area.svg" alt="" />
                    <p>{size} <sup className={styles.square}>2</sup> </p>
                </div>
            </div>
            <div className={`${styles.infoBox} ${styles.center}`}>
                <div className={styles.info}>
                    <img src="/icons/area.svg" alt="" />
                    <p>{size}</p>
                </div>
            </div>
            <div className={`${styles.infoBox} ${styles.end}`}>
                <div className={styles.info}>
                    <img src="/icons/area.svg" alt="" />
                    <p>{size}</p>
                </div>
            </div>
            <div className={styles.infoBox}>
                <div className={styles.info}>
                    <img src="/icons/area.svg" alt="" />
                    <p>{size}</p>
                </div>
            </div>
            <div className={`${styles.infoBox} ${styles.center}`}>
                <div className={styles.info}>
                    <img src="/icons/area.svg" alt="" />
                    <p>{size}</p>
                </div>
            </div>
            <div className={`${styles.infoBox} ${styles.end}`}>
                <div className={styles.info}>
                    <img src="/icons/area.svg" alt="" />
                    <p>{size}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetails
