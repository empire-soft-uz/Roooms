import { useRouter } from 'next/navigation'
import React from 'react'
import styles from "./footer.module.css"

const Footer = () => {
    const route = useRouter()
    return (
        <div className={styles.footer}>
            <div className={styles.social}>
                <div className={styles.title}>
                    <h1 onClick={() => route.push("/")}>Roooms</h1>
                    <p>
                        Enjoy by triping <br />
                        with Travelint.
                    </p>
                </div>
                <div className={styles.socialBox}>
                    <a href="#">
                        <img className={styles.socialIcon} src="/icons/facebook.svg" alt="" />
                    </a>
                    <a href="">
                        <img className={styles.socialIcon} src="/icons/telegram.svg" alt="" />
                    </a>
                    <a href="">
                        <img className={styles.socialIcon} style={{ padding: "2px" }} src="/icons/instagram.svg" alt="" />
                    </a>
                </div>
            </div>
            <div className={styles.producer}>
                <p>2023 (c)-Rooms. All Rights Reserved </p>
            </div>
        </div>
    )
}

export default Footer
