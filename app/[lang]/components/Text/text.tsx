import React, { CSSProperties } from 'react'

interface Props {
    text?: string;
    style?: CSSProperties;
}

const Text: React.FC<Props> = ({
    text,
    style
}) => {
    return (
        <p
            style={{
                fontSize: "14px",
                fontWeight: "300",
                lineHeight: "24px",
                ...style
            }} >
            {text}
        </p>
    )
}

export default Text
