import useRootStore from '@/app/hooks/useRootStore'
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import Modal from "react-modal"
import MainModal from '../MainModal/mainModal'
import styles from "./moreTextModal.module.css"

const MoreTextModal = () => {

    let item: any

    useEffect(() => {
        item = localStorage.getItem("item")
    }, [])
    // const itemData = JSON.parse(item as string)
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
