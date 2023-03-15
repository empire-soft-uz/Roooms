import React from 'react'
import Button from '../Button/button'
import ContactForm from '../ContactForm/contactForm'
import styles from "./contact.module.css"

const Contact = () => {
    return (
        <div className={styles.container} id="contact">
            <div className={styles.headerBox}>
                <h1>Biz bilan bog’lanish</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.leftBox}>
                    <h1>Контакт</h1>
                    <p className={styles.text}>
                        <strong style={{ color: "#000", fontWeight: "400" }}>Handmade</strong> - это маркетплейс авторских туров от тревел-экспертов
                        и частных независимых гидов. Авторские туры — это спонтанные и яркие
                        возможности, предлагающие взять максимум от каждой точки маршрута.
                        Мы за непринужденный подход к групповым путешествиям,
                        который больше похож на встречу со старыми друзьями.
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
