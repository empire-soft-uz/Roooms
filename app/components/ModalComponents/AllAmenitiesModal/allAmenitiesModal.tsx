import useRootStore from 'app/hooks/useRootStore'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import InfoItem from '../../InfoItem/infoItem'
import MainModal from '../MainModal/mainModal'
import styles from "./allAmenitiesModal.module.css"

const AllAmenitiesModal = () => {

    const { oneRoomItemData: item } = useRootStore().itemStore


    const { show, hide, visiable } = useRootStore().visibleStore
    return (
        <MainModal
            show={visiable.amenities}
            hide={() => hide("amenities")}
            title="What this place offers"
        >
            <div className={styles.container}>
                <InfoItem
                    url={item?.entireIcon}
                    title={item?.entire}
                    text={item?.entireText}
                />
                <InfoItem
                    url={item?.cleanIcon}
                    title={item?.clean}
                    text={item?.cleanText}
                />
                <InfoItem
                    url={item?.selfIcon}
                    title={item?.self}
                    text={item?.selfText}
                />
                <InfoItem
                    url={item?.freeIcon}
                    title={item?.free}
                />
            </div>
        </MainModal>
    )
}

export default observer(AllAmenitiesModal)
