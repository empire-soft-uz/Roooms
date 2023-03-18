import useRootStore from 'app/hooks/useRootStore'
import { useRouter } from 'next/navigation'
import React from 'react'
import styles from "./category.module.css"

const Category = () => {
    const router = useRouter()
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
                    Category
                </h1>
                <p>Bo’lajak xonadongizni uzoq vaqt qidirishingiz shart <br />
                    emas. Biz ularni toifalar bo'yicha guruhladik
                </p>
            </div>
            <div className={styles.contentBox}>
                <div className={styles.content}
                    onClick={() => FilterItem("Ko`p qavatli")}
                >
                    <img src="/cards/room.png" alt="" />
                    <h5>Ko’p qavatli</h5>
                </div>
                <div className={styles.content}
                    onClick={() => FilterItem("Hovli")}
                >
                    <img src="/cards/hovli.png" alt="" />
                    <h5>Hovli</h5>
                </div>
                <div className={styles.content}
                    onClick={() => FilterItem("Ofis")}
                >
                    <img src="/cards/ofis.png" alt="" />
                    <h5>Ofis</h5>
                </div>
                <div className={styles.content}
                    onClick={() => FilterItem("Dam olish")}
                >
                    <img src="/cards/dam-olish.png" alt="" />
                    <h5>Dam olish</h5>
                </div>
            </div>
        </div >
    )
}

export default Category
