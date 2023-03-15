import React, { CSSProperties } from 'react'
import MoreBtn from '../MoreBtn/moreBtn';
import styles from "./rowItem.module.css"
interface Props {
    leftUrl?: string;
    title?: string;
    text?: string;
    style?: CSSProperties;
    clickBtn?: () => void;
}

const RowItem: React.FC<Props> = ({
    leftUrl,
    title,
    text,
    style,
    clickBtn
}) => {
    return (
        <div className={styles.container} style={{ ...style }}>
            <div className={styles.leftBox}>
                <img src={leftUrl} alt="" />
                <p>{title}</p>
            </div>
            <MoreBtn title={text} onPress={clickBtn} />
        </div>
    )
}

export default RowItem
