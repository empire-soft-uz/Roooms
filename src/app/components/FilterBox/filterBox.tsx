import React, { CSSProperties } from 'react'
import styles from "./filterBox.module.css"

interface Props {
    style?: CSSProperties
}

const FilterBox: React.FC<Props> = ({
    style
}) => {
    return (
        <div className={styles.filterBox} style={{ ...style }}>
            <div className={styles.filterLeft}>
                <div className={styles.filterType}>
                    <div className={styles.iconBox}>
                        <img src="/icons/calendar.svg" alt="" />
                    </div>
                    <h3>Date</h3>
                </div>
                <p>Choose date <img src="/icons/arrow-down.svg" alt="" /></p>
            </div>
            <div className={styles.filterRight}>
                <div className={styles.filterType}>
                    <div className={styles.iconBox}>
                        <img src="/icons/location.svg" alt="" />
                    </div>
                    <h3>People</h3>
                </div>
                <div className={styles.btnBox}>
                    <img className={styles.minus} src="/icons/minus.svg" alt="" />
                    <span>Add people</span>
                    <span className={styles.plus}>+</span>
                </div>
            </div>
        </div>
    )
}

export default FilterBox
