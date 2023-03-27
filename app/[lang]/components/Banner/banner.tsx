import useRootStore from 'app/[lang]/hooks/useRootStore'
import { observer } from 'mobx-react-lite'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import React from 'react'
import Counter from '../Counter/counter'
import DropDown from '../DropDown/dropDown'
import styles from "./banner.module.css"

const Banner = () => {
    const t = useTranslations('home');
    const locale = useLocale();
    const { setItem } = useRootStore().itemStore
    const router = useRouter()
    function SearRoomNavigation() {
        router.push(`${locale}/allItems`)
    }
    return (
        <div className={styles.container}>
            <div className={styles.imgBox}>
                {/* <img src="/cards/bg1.png" alt="" /> */}
                <iframe width="100%" height="640" frameBorder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowFullScreen scrolling="no" src="https://kuula.co/share/N6h5y?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&gyro=0&autorotate=0.75&thumbs=1"></iframe>
            </div>
            <div className={styles.aboveBox}>
                <div className={styles.box}>
                    <div className={styles.filterBox}>
                        <div className={styles.iconBox}>
                            <img src="/icons/location.svg" alt="l" />
                        </div>
                        <h2>{t("location")}</h2>
                    </div>
                    <input
                        onChange={(e) => setItem(e.target.value as never, "address")}
                        type="text"
                        placeholder={`${t("search_by_location")}`}
                    />
                </div>
                <div className={styles.box}>
                    <div className={styles.filterBox}>
                        <div className={styles.iconBox}>
                            <img src="/icons/calendar.svg" alt="" />
                        </div>
                        <h2>{t("type")}</h2>
                    </div>
                    <DropDown />
                </div>
                <div className={styles.boxOne}>
                    <div className={styles.filterBox}>
                        <div className={styles.iconBox}>
                            <img src="/icons/doorBlue.svg" alt="" />
                        </div>
                        <h2>{t("rooms")}</h2>
                    </div>
                    <Counter />
                </div>
                <div className={styles.searchBox} onClick={() => SearRoomNavigation()} >
                    <img src="/icons/search.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default observer(Banner)
