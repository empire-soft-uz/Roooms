import React, { CSSProperties } from 'react'
import styles from "./moreBtn.module.css"

interface Props {
    title?: string;
    onPress?: () => void;
    style?: CSSProperties;
}

const MoreBtn: React.FC<Props> = ({
    title,
    onPress,
    style
}) => {
    return (
        <div className={styles.box} onClick={onPress} style={{ ...style }}>
            <p>{title}</p>
            <img src="/icons/arrow.svg" alt="" />
        </div>
    )
}

export default MoreBtn
