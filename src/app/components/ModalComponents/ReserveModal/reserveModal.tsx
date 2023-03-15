import useRootStore from '@/app/hooks/useRootStore'
import { observer } from 'mobx-react-lite'
import React from 'react'
import ContactForm from '../../ContactForm/contactForm'
import MainModal from '../MainModal/mainModal'

const ReserveModal = () => {
    const { visiable, show, hide } = useRootStore().visibleStore
    return (
        <MainModal
            show={visiable.reserve}
            hide={() => hide("reserve")}
            title="Request to Home"
        >
            <div>
                <ContactForm />
            </div>
        </MainModal>
    )
}

export default observer(ReserveModal);
