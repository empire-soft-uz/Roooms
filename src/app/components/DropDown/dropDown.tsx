import React from 'react'
import useRootStore from '@/app/hooks/useRootStore';
import { observer } from 'mobx-react-lite';

const DropDown = () => {
    const { oneItem, setItem } = useRootStore().itemStore

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
                <option value="Ko'p qavatli">Ko’p qavatli</option>
                <option value="Hovli">Hovli</option>
                <option value="Ofis">Ofis</option>
                <option value="Dam olish">Dam olish</option>
            </select>
        </div>
    )
}

export default observer(DropDown)