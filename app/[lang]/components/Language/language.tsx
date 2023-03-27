import { useTranslations } from 'next-intl';
import React from 'react'
import { useLocale } from 'next-intl';
import styles from "./language.module.css"
import { usePathname, useRouter } from 'next/navigation';

const ChooseLanguage = () => {
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations('home');;
    
    //http://localhost:3000/ru/itemInfo/2 => http://localhost:3000/uz/itemInfo/2

    const lngs = {
        uz: { nativeName: 'UZ' },
        ru: { nativeName: 'RU' }
    }
    
    const locale = useLocale();

    const getLocalizedHref = (lng: string) => {
        const path = pathname.split('/');
        path[1] = lng;
        return path.join('/');
    }
    

    const changeLanguage = (lng: any) => {
        router.push(getLocalizedHref(lng));
    }
    return (
        <div>
            <select
                className={styles.selectBox}
                onChange={(e) => changeLanguage(e.target.value)}
                value={locale}
            >
                {Object.keys(lngs).map((lng) => (
                    <option value={lng} key={lng}>{lngs[lng as keyof typeof lngs].nativeName}</option>
                ))}
            </select>
        </div >
    )
}

export default ChooseLanguage
