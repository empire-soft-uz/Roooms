import React, { CSSProperties } from 'react'
interface Props {
    title?: string;
    style?: CSSProperties;
}

const Title: React.FC<Props> = ({
    title,
    style
}) => {
    return (
        <h2 style={{
            fontWeight: "400",
            ...style
        }}>
            {title}
        </h2>
    )
}

export default Title
