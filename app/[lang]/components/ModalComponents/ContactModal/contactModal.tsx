import useRootStore from 'app/[lang]/hooks/useRootStore'
import { observer } from 'mobx-react-lite'
import React from 'react'
import InfoItem from '../../InfoItem/infoItem'
import MainModal from '../MainModal/mainModal'

const ContactModal = () => {
    const { show, visiable, hide } = useRootStore().visibleStore

    return (
        <MainModal
            show={visiable.contact}
            hide={() => hide("contact")}
            title="Contact the owner"
        >
            <div>
                <InfoItem
                    title='Shaxzod Begmamatov'
                    text={<a style={{ textDecoration: "none", color: "#AEAEAE" }} href='tel: +998 99 030 46 32'>+998 99 030 46 32</a>}
                    url='/icons/phone.svg'
                />
            </div>
        </MainModal>
    )
}

export default observer(ContactModal);
