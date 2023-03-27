import { CategoryData } from 'app/[lang]/category'
import useRootStore from 'app/[lang]/hooks/useRootStore'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import React from 'react'
import styles from "./category.module.css"

const Category = () => {
    const t = useTranslations('home');
    const locale = useLocale();
    const router = useRouter()
    const { categoryFilter } = useRootStore().category
    function FilterItem(value: any) {
        router.push(`${locale}/category/${value}`)
        categoryFilter(value)
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
                    onClick={() => FilterItem(CategoryData[0].key)}
                >
                    <img src="/cards/room.png" alt="" />
                    <h5>{t("multi_storey")}</h5>
                </div>
                <div className={styles.content}
                    onClick={() => FilterItem(CategoryData[1].key)}
                >
                    <img src="/cards/hovli.png" alt="" />
                    <h5>{t("yard")}</h5>
                </div>
                <div className={styles.content}
                    onClick={() => FilterItem(CategoryData[2].key)}
                >
                    <img src="/cards/ofis.png" alt="" />
                    <h5>{t("ofice")}</h5>
                </div>
                <div className={styles.content}
                    onClick={() => FilterItem(CategoryData[3].key)}
                >
                    <img src="/cards/dam-olish.png" alt="" />
                    <h5>{t("rest")}</h5>
                </div>
            </div>
        </div >
    )
}

export default Category
