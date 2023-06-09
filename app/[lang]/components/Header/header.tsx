import { useTranslations } from "next-intl";
import React from "react"
import ChooseLanguage from '../Language/language'
import styles from "./header.module.css"
interface Props {
    contactLink?: string;
    logoLink?: string;
}

const Header: React.FC<Props> = ({
    contactLink,
    logoLink
}) => {
    // const windowWidth = useRef(window.innerWidth)
    const t = useTranslations('home');
    return (
        <div className={styles.container}>
            <a href={logoLink} className={styles.title}>Roooms</a>
            <div className={styles.rightBox}>
                <ChooseLanguage />
                <a className={styles.contact} href={contactLink}>{t("contact")}</a>
                <a className={styles.pNumber} href="tel:+998 99 310 37 63">+998 99 310 37 63</a>
            </div>
        </div>
    )
}

export default Header
