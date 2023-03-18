import useRootStore from 'app/hooks/useRootStore'
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import MainModal from '../MainModal/mainModal'
import styles from "./moreTextModal.module.css"

const MoreTextModal = () => {

    const { oneRoomItemData: item } = useRootStore().itemStore

    const { show, hide, visiable } = useRootStore().visibleStore
    return (
        <MainModal
            show={visiable.moreText}
            hide={() => hide("moreText")}
            title="About this space"
        >
            <div className={styles.container}>
                <p>
                    {item?.text}
                </p>
            </div>
        </MainModal>
    )
}

export default observer(MoreTextModal)
