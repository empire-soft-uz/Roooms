import React, { CSSProperties } from 'react'
import styles from "./button.module.css"

interface Props {
    title?: any;
    onPress?: () => void;
    style?: CSSProperties;
}

const Button: React.FC<Props> = ({
    title,
    onPress,
    style,
}) => {
    return (
        <>
            <button style={{ ...style, }} onClick={onPress} className={styles.btn}>{title}</button>
        </>
    )
}

export default Button
