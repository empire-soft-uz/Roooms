'use client'

import useRootStore from 'app/[lang]/hooks/useRootStore'
import { observer } from 'mobx-react-lite'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Footer from '../components/Footer/footer'
import Header from '../components/Header/header'
import CardComponent from '../components/ItemComponent/itemComponent'
import Loader from '../components/Loader/loader'
import SmallLoader from '../components/SmallLoader/smallLoader'
import Text from '../components/Text/text'
import styles from "./filterItems.module.css"

const AllItems = ({
    params: { lang }
}: {
    params: { lang: string }
}) => {
    const { AllProducts, SetOneRoomItem, data, isLoading } = useRootStore().itemStore;
    const t = useTranslations("home")
    const router = useRouter()
    const [yourHouse, setYourHouse] = useState<{
        type: "Sotiladi" | "Ijaraga" | "all",
        isFilter: boolean
    }>({ isFilter: false, type: "all" })

    const ShowItemInfo = (e: any) => {
        router.push(`${lang}/itemInfo/${e.id}`)
        SetOneRoomItem(e)
    }
    return (
        <>
            <Header contactLink='/#contact' logoLink='/#' />
            <div className={styles.category}>
                <h1>{t("category_you_choosed")}</h1>
                <div className={styles.filter}>
                    <button
                        className={yourHouse.type === "Sotiladi" ? styles.activeBtn : styles.inActiveBtn}
                        onClick={() => setYourHouse({
                            isFilter: true,
                            type: "Sotiladi"
                        })}>{t("sold")}
                    </button>
                    <button
                        className={yourHouse.type === "Ijaraga" ? styles.activeBtn : styles.inActiveBtn}
                        onClick={() => setYourHouse({
                            isFilter: true,
                            type: "Ijaraga"
                        })}>{t("for_rent")}
                    </button>
                    <button
                        className={yourHouse.isFilter ? styles.inActiveBtn : styles.activeBtn}
                        onClick={() => setYourHouse({
                            isFilter: false,
                            type: "all"
                        })}>{t("all")}
                    </button>
                </div>
            </div>
            <div className={styles.content} >
                {data?.length > 0 ?
                    data?.filter(i => {
                        if (!yourHouse.isFilter) return true;

                        return i.forKey === yourHouse.type;
                    }).map((e: any, index: number) => {
                        return (
                            <CardComponent
                                onPress={() => ShowItemInfo(e as never)}
                                key={index}
                                image={e?.images[0].image}
                                name={e?.name}
                                price={e?.price}
                                forr={e?.for}
                                time={e?.time}
                                type={e?.type}
                                size={e?.size}
                                many={e?.many}
                                floor={e?.floor}
                                location={e?.location.length >= 34 ? e?.location.slice(0, 31) + `...` : e?.location}
                            />
                        )
                    })
                    :
                    <Text text={`${t("nothing_found")}`} />}
            </div>
            <Footer />
        </>
    )
}

export default observer(AllItems)
