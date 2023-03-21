'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import styles from "./language.module.css"
import i18n from 'app/translations/translations';

const ChooseLanguage = () => {
    const lngs = {
        uz: { nativeName: 'UZ' },
        ru: { nativeName: 'RU' }
    }
    const changeLanguage = (lng: any) => {
        i18n.changeLanguage(lng);
    }
    return (
        <div>
            <select
                className={styles.selectBox}
                onChange={(e) => changeLanguage(e.target.value)}
            >
                {Object.keys(lngs).map((lng) => (
                    <option value={lng} key={lng}>{lngs[lng as keyof typeof lngs].nativeName}</option>
                ))}
            </select>
        </div >
    )
}

export default ChooseLanguage
