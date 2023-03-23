import useRootStore from 'app/hooks/useRootStore'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from "./category.module.css"

const Category = () => {
    const router = useRouter()
    const { t } = useTranslation()
    const { setItem } = useRootStore().itemStore
    function FilterItem(value: any) {
        setItem(value, 'type')
        router.push("/allItems")
    }
    return (
        <div className={styles.container}>
            <div className={styles.topBox}>
                <h1>
                    <div className={styles.line}></div>
                    {t("category")}
                </h1>
                <p>
                    {t("category_text")}
                </p>
            </div>
            <div className={styles.contentBox}>
                <div className={styles.content}
                    onClick={() => FilterItem("Ko`p qavatli")}
                >
                    <img src="/cards/room.png" alt="" />
                    <h5>{t("multi_storey")}</h5>
                </div>
                <div className={styles.content}
                    onClick={() => FilterItem("Hovli")}
                >
                    <img src="/cards/hovli.png" alt="" />
                    <h5>{t("yard")}</h5>
                </div>
                <div className={styles.content}
                    onClick={() => FilterItem("Ofis")}
                >
                    <img src="/cards/ofis.png" alt="" />
                    <h5>{t("ofice")}</h5>
                </div>
                <div className={styles.content}
                    onClick={() => FilterItem("Dam olish")}
                >
                    <img src="/cards/dam-olish.png" alt="" />
                    <h5>{t("rest")}</h5>
                </div>
            </div>
        </div >
    )
}

export default Category
