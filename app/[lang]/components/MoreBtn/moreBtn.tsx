import Link from 'next/link';
import React, { CSSProperties } from 'react'
import styles from "./moreBtn.module.css"

interface Props {
    title?: string;
    onPress?: () => void;
    style?: CSSProperties;
    linkUrl?: string;
    a_target?: string
}

const MoreBtn: React.FC<Props> = ({
    title,
    onPress,
    style,
    linkUrl,
    a_target
}) => {
    return (
        <a className={styles.linkBox} href={linkUrl} target={a_target}>
            <div className={styles.box} onClick={onPress} style={{ ...style }}>
                <p>{title}</p>
                <img src="/icons/arrow.svg" alt="" />
            </div>
        </a>
    )
}

export default MoreBtn
