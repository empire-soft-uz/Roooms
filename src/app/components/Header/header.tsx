import Link from 'next/link'
import React from "react"
import { useTranslation } from 'react-i18next'
import ChooseLanguage from '../Language/language'
// import { useRef } from 'react'
import styles from "./header.module.css"

const Header = () => {
    // const windowWidth = useRef(window.innerWidth)
    const { t, i18n } = useTranslation();
    return (
        <div className={styles.container}>
            <a href='#' className={styles.title}>{t("Roooms")}</a>
            <div className={styles.rightBox}>
                <ChooseLanguage />
                <a className={styles.contact} href="#contact">{t("contact")}</a>
                <a className={styles.pNumber} href="tel:+998 99 310 37 63">+998 99 310 37 63</a>
            </div>
        </div>
    )
}

export default Header
