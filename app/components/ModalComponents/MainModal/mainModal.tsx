import useRootStore from 'app/hooks/useRootStore';
import { observer } from 'mobx-react-lite'
import React from 'react'
import Modal from "react-modal"
import styles from "./mainModal.module.css"
interface Props {
    title?: string;
    children?: any;
    show: boolean;
    hide?: () => void
}
const MainModal: React.FC<Props> = ({
    title,
    children,
    show,
    hide
}) => {

    return (

        <Modal
            isOpen={show}
            onRequestClose={hide}
            className={styles.modal}
            overlayClassName={styles.overlay}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1200
                }
            }}
        >
            <div className={styles.container}>
                <div className={styles.cancel}>
                    <div className={styles.iconBox} onClick={hide}>
                        <img src="/icons/x.svg" alt="" />
                    </div>
                </div>
                <div className={styles.titleBox}>
                    <h2>{title}</h2>
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </Modal>

    )
}

export default observer(MainModal)
