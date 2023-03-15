import useRootStore from '@/app/hooks/useRootStore'
import { observer } from 'mobx-react-lite'
import React from 'react'
import Modal from 'react-modal'
import InfoItem from '../../InfoItem/infoItem'
import MainModal from '../MainModal/mainModal'
import RowItem from '../../RowItem.tsx/rowItem'
import Title from '../../Title/title'
import styles from "./allAmenitiesModal.module.css"

const AllAmenitiesModal = () => {
    const item = localStorage.getItem("item")
    const itemData = JSON.parse(item as string)
    const { show, hide, visiable } = useRootStore().visibleStore
    return (
        <MainModal
            show={visiable.amenities}
            hide={() => hide("amenities")}
            title="What this place offers"
        >
            <div className={styles.container}>
                <InfoItem
                    url={itemData.entireIcon}
                    title={itemData.entire}
                    text={itemData.entireText}
                />
                <InfoItem
                    url={itemData.cleanIcon}
                    title={itemData.clean}
                    text={itemData.cleanText}
                />
                <InfoItem
                    url={itemData.selfIcon}
                    title={itemData.self}
                    text={itemData.selfText}
                />
                <InfoItem
                    url={itemData.freeIcon}
                    title={itemData.free}
                />
            </div>
        </MainModal>
    )
}

export default observer(AllAmenitiesModal)
