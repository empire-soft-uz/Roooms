import React from 'react'
import { Player } from "@lottiefiles/react-lottie-player";

const SmallLoader = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "45vh",
            fontSize: "20px",
            fontWeight: "bold",
        }}>
            <Player
                autoplay
                speed={2}
                loop
                src="https://assets9.lottiefiles.com/packages/lf20_t9gkkhz4.json"
                style={{ height: 300, width: 300 }}
            >
            </Player>
        </div>
    )
}

export default SmallLoader
