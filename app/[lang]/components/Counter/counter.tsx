import useRootStore from 'app/[lang]/hooks/useRootStore'
import { observer } from 'mobx-react-lite'
import { useTranslations } from 'next-intl'
import React from 'react'
import styles from "./counter.module.css"

const Counter = () => {
    const t = useTranslations('home');;
    const { oneItem, setItem } = useRootStore().itemStore
    return (
        <div className={styles.container}>
            <span className={styles.calcu} onClick={() => setItem(Number(oneItem.roomCount) - 1, 'roomCount')}>
                <img style={{ marginBottom: "5px" }} src="/icons/minus.svg" alt="" />
            </span>
            <span style={{ fontSize: "13px" }}>
                {oneItem.roomCount === 0 ? t("add_room") : oneItem.roomCount + t("room")}
            </span>
            <span className={styles.calcu} onClick={() => setItem(Number(oneItem.roomCount) + 1, 'roomCount')}>
                <img src="/icons/plus.svg" alt="" />
            </span>
        </div>
    )
}

export default observer(Counter)