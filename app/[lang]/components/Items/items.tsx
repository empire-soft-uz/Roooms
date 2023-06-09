'use client'
import useRootStore from 'app/[lang]/hooks/useRootStore';
import Link from 'next/link'
import React from 'react'
import { observer } from 'mobx-react-lite';
import ItemComponent from '../ItemComponent/itemComponent'
import styles from "./items.module.css"
import { ItemsData } from '../../allData'
import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';


const Items = () => {
    const t = useTranslations('home');
    const locale = useLocale();
    const { SetOneRoomItem } = useRootStore().itemStore
    const router = useRouter()
    const lang = usePathname().split('/')[1]
    const ShowItemInfo = (e: any) => {
        router.push(`${lang}/itemInfo/${e.id}`)
        SetOneRoomItem(e)
    }

    return (
        <>
            <div className={styles.header}>
                <h1>{t("Popular_searches")}</h1>
                <Link href={`${locale}/allItems`} style={{ color: "#000" }} >
                    <div className={styles.more}>
                        <p>{t("see_all")}</p>
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
