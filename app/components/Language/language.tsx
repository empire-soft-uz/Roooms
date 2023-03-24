'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import styles from "./language.module.css"
import i18n from 'app/translations/translations';

const ChooseLanguage = () => {
    const [state, setState] = useState()
    const setLng = localStorage.getItem("i18nextLng")
    const lngs = {
        uz: { nativeName: 'UZ' },
        ru: { nativeName: 'RU' }
    }
    const changeLanguage = (lng: any) => {
        i18n.changeLanguage(lng);
        setState(lng)
    }
    return (
        <div>
            <select
                className={styles.selectBox}
                onChange={(e) => changeLanguage(e.target.value)}
                defaultValue={`${setLng}`}
            >
                {Object.keys(lngs).map((lng) => (
                    <option value={lng} key={lng}>{lngs[lng as keyof typeof lngs].nativeName}</option>
                ))}
            </select>
        </div >
    )
}

export default ChooseLanguage
