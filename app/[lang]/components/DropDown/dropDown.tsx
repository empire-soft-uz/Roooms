import React from 'react'
import useRootStore from 'app/[lang]/hooks/useRootStore';
import { observer } from 'mobx-react-lite';
import { useTranslations } from 'next-intl';
import styles from "./styles.module.css"

const DropDown = () => {
    const { setItem } = useRootStore().itemStore
    const t = useTranslations('home');

    return (
        <div>
            <select className={styles.select} name="Turni tanlang"
                onChange={(e) => setItem(e.target.value, "type")}
            >
                <option value="multi_storey">{t("multi_storey")}</option>
                <option value="yard">{t("yard")}</option>
                <option value="ofice">{t("ofice")}</option>
                <option value="rest">{t("rest")}</option>
            </select>
        </div>
    )
}

export default observer(DropDown)