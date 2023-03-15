'use client'

import useRootStore from '@/app/hooks/useRootStore'
import { observer } from 'mobx-react-lite'
import Footer from '../components/Footer/footer'
import Header from '../components/Header/header'
import CardComponent from '../components/ItemComponent/itemComponent'
import styles from "./allItems.module.css"
import { ItemsData } from '../allData'
import { useRouter } from 'next/navigation'
import Text from '../components/Text/text'

const AllItems = () => {
    const { data } = useRootStore().itemStore;
    const router = useRouter()
    const ShowItemInfo = (e: []) => {
        router.push("/itemInfo")
        localStorage.setItem("item", JSON.stringify(e));
    }
    return (
        <>
            <Header />
            <div className={styles.category}>
                <h1>Category you choosed</h1>
                <div className={styles.filter}>
                    <button>Sotiladi</button>
                    <button>Ijaraga beriladi</button>
                </div>
            </div>
            <div className={styles.content} >
                {data ?
                    data?.map((e: any, index: number) => {
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
                    <Text text='Xechnarsa topilmadi!' />
                }
            </div>
            <Footer />
        </>
    )
}

export default observer(AllItems)
