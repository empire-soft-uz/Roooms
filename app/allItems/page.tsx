'use client'

import useRootStore from 'app/hooks/useRootStore'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import Footer from '../components/Footer/footer'
import Header from '../components/Header/header'
import CardComponent from '../components/ItemComponent/itemComponent'
import Text from '../components/Text/text'
import styles from "./allItems.module.css"

const AllItems = () => {
    const { AllProducts, SetOneRoomItem } = useRootStore().itemStore;
    const { t } = useTranslation()
    const router = useRouter()
    const ShowItemInfo = (e: any) => {
        router.push("/itemInfo")
        SetOneRoomItem(e)
    }
    return (
        <>
            <Header contactLink='/#contact' logoLink='/#' />
            <div className={styles.category}>
                <h1>{t("category_you_choosed")}</h1>
                <div className={styles.filter}>
                    <button>{t("sold")}</button>
                    <button>{t("for_rent")}</button>
                </div>
            </div>
            <div className={styles.content} >
                {AllProducts?.length > 0 ?
                    AllProducts?.map((e: any, index: number) => {
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
                    <Text text={`${t("nothing_found")}`} />
                }
            </div>
            <Footer />
        </>
    )
}

export default observer(AllItems)
