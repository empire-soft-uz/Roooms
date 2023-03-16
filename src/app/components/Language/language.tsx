'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useTranslation } from 'react-i18next';
import styles from "./language.module.css"

const ChooseLanguage = () => {
    const { t, i18n } = useTranslation();
    // const { locales } = useRouter()
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        console.log(lng);
    };
    return (
        <div>
            <select
                className={styles.selectBox}
            // onChange={(e) => changeLanguage(e.target.value)}
            >
                <option
                    value="uzb"
                    onClick={() => changeLanguage('uzb')}
                >
                    UZB
                </option>
                <option
                    value="rus"
                    onClick={() => changeLanguage('rus')}
                >
                    RUS
                </option>
            </select>
            {/* ))} */}
        </div >
    )
}

export default ChooseLanguage
