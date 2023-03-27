import React from 'react'
import useRootStore from 'app/[lang]/hooks/useRootStore';
import { observer } from 'mobx-react-lite';
import { useTranslations } from 'next-intl';

const DropDown = () => {
    const { setItem } = useRootStore().itemStore
    const t = useTranslations('home');

    return (
        <div>
            <select name="Turni tanlang" style={{
                border: "none", outline: "none",
                width: "150px",
                color: "#AEAEAE",
                cursor: "pointer"
            }}
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