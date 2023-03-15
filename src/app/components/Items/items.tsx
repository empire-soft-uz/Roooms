'use client'
import useRootStore from '@/app/hooks/useRootStore'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite';
import ItemComponent from '../ItemComponent/itemComponent'
import styles from "./items.module.css"
import { ItemsData } from '../../allData'
import { useRouter } from 'next/navigation';


const Items = () => {
    const { setItem } = useRootStore().itemStore
    const router = useRouter()
    const ShowItemInfo = (e: any) => {
        router.push("/itemInfo")
        localStorage.setItem("item", JSON.stringify(e));
    }

    return (
        <>
            <div className={styles.header}>
                <h1>Ommabop qidiruvlar</h1>
                <Link href={"/allItems"} style={{ color: "#000" }} >
                    <div className={styles.more}>
                        <p>Barchasini ko’rish</p>
                        <img src="/icons/right-arrow.svg" alt="" />
                    </div>
                </Link>
            </div>
            <div className={styles.content} >
                {ItemsData.map((e, index) => {
                    return (
                        <ItemComponent
                            onPress={() => ShowItemInfo(e as never)}
                            key={index}
                            image={e?.images[0].image}
                            name={e?.name}
                            price={e?.price as any}
                            forr={e?.for}
                            time={e?.time}
                            type={e?.type}
                            size={e?.size}
                            many={e?.many}
                            floor={e?.floor}
                            location={e?.location.length >= 34 ? e?.location.slice(0, 31) + `...` : e?.location}
                        />

                    )
                })}
            </div>
        </>
    )
}

export default observer(Items) 
