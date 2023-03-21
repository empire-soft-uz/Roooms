import React from 'react'
import useRootStore from 'app/hooks/useRootStore';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

const DropDown = () => {
    const { oneItem, setItem } = useRootStore().itemStore
    const { t } = useTranslation()

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
                <option value="Ko'p qavatli">{t("multi_storey")}</option>
                <option value="Hovli">{t("yard")}</option>
                <option value="Ofis">{t("ofice")}</option>
                <option value="Dam olish">{t("rest")}</option>
            </select>
        </div>
    )
}

export default observer(DropDown)