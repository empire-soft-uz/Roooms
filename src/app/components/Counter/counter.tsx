import useRootStore from '@/app/hooks/useRootStore'
import { observer } from 'mobx-react-lite'
import React from 'react'
import styles from "./counter.module.css"

const Counter = () => {
    const { oneItem, setItem } = useRootStore().itemStore
    return (
        <div className={styles.container}>
            <span className={styles.calcu} onClick={() => setItem(Number(oneItem.roomCount) - 1, 'roomCount')}>
                <img style={{ marginBottom: "5px" }} src="/icons/minus.svg" alt="" />
            </span>
            {
                oneItem.roomCount === 0 ? 'Xona qo’shish' : oneItem.roomCount + ' xona'
            }
            <span className={styles.calcu} onClick={() => setItem(Number(oneItem.roomCount) + 1, 'roomCount')}>
                <img src="/icons/plus.svg" alt="" />
            </span>
        </div>
    )
}

export default observer(Counter)