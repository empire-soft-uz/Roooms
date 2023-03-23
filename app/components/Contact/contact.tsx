import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../Button/button'
import ContactForm from '../ContactForm/contactForm'
import styles from "./contact.module.css"

const Contact = () => {
    const { t } = useTranslation()
    return (
        <div className={styles.container} id="contact">
            <div className={styles.headerBox}>
                <h1>{t("contact_us")}</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.leftBox}>
                    <h1>{t("contact")}</h1>
                    <p className={styles.text}>
                        {t("contact_us_text")}
                    </p>
                    <div className={styles.info}>
                        <div className={styles.iconBox}>
                            <img src="/icons/phone.svg" alt="" />
                        </div>
                        <a href="tel:+998 91 234 56 78">+998 91 234 56 78</a>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.iconBox}>
                            <img src="/icons/email.svg" alt="" />
                        </div>
                        <p>roooms@gmail.com</p>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.iconBox}>
                            <img src="/icons/map.svg" alt="" />
                        </div>
                        <p>Uzbekistan, Samarkhand</p>
                    </div>
                </div>
                <div className={styles.rightBox}>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact
