'use client'

import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import Script from "next/script"
import { useEffect } from 'react'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import BookingBox from '../components/BookingBox/bookingBox'
import Button from '../components/Button/button'
import Carusel from '../components/Carusel/carusel'
import ContactForm from '../components/ContactForm/contactForm'
import Footer from '../components/Footer/footer'
import Header from '../components/Header/header'
import HowManyRoom from '../components/HowManyRoom/howManyRoom'
import InfoItem from '../components/InfoItem/infoItem'
import AllAmenitiesModal from '../components/ModalComponents/AllAmenitiesModal/allAmenitiesModal'
import ContactModal from '../components/ModalComponents/ContactModal/contactModal'
import MoreTextModal from '../components/ModalComponents/MoreTextModal/moreTextModal'
import ReserveModal from '../components/ModalComponents/ReserveModal/reserveModal'
import MoreBtn from '../components/MoreBtn/moreBtn'
import RowItem from '../components/RowItem.tsx/rowItem'
import Text from '../components/Text/text'
import Title from '../components/Title/title'
import useRootStore from '../hooks/useRootStore'
import styles from "./itemInfo.module.css"

const ItemInfo = () => {

    const { oneRoomItemData, getOneRoomItem, isLoading } = useRootStore().itemStore

    console.log(toJS(oneRoomItemData));

    useEffect(() => {
        getOneRoomItem()
    }, [])

    const { show } = useRootStore().visibleStore
    const { dayCount } = useRootStore().itemStore
    var total = dayCount.day * Number(oneRoomItemData.price as any)

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <>
            <ToastContainer
                position='top-center'
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
            <div>
                <Header />
                <div className={styles.container}>
                    <div className={styles.leftBox}>
                        <Carusel />
                    </div>
                    <div className={styles.rightBox}>
                        <Title title={oneRoomItemData.name} />
                        <HowManyRoom
                            room={oneRoomItemData.room}
                            kitchen={oneRoomItemData.kitchen}
                            bedroom={oneRoomItemData.bedroom}
                            hall={oneRoomItemData.hall}
                        />
                        <h3>{oneRoomItemData.price + ` $ `}<span className={styles.time}> {oneRoomItemData.time ? ` / ` + oneRoomItemData.time : null}</span></h3>
                        {oneRoomItemData.squarePrice ?
                            <p className={styles.text}>{oneRoomItemData.squarePrice} $ / m<sup>2</sup></p>
                            : null
                        }
                        <RowItem
                            title={oneRoomItemData.owner}
                            text="Kontaktlar"
                            clickBtn={() => show("contact")}
                        />
                        <Text
                            style={{ marginTop: "15px", fontFamily: "NunitoSansLight" }}
                            text={oneRoomItemData.text?.length >= 350 ? oneRoomItemData.text.slice(0, 347) + ` ...` : oneRoomItemData.text}
                        />
                        <MoreBtn onPress={() => show("moreText")} title='Show more' style={{ marginTop: "20px" }} />
                        <RowItem
                            title={oneRoomItemData.location ? oneRoomItemData.location : "Camchatka, Russia"}
                            leftUrl="/icons/place.svg"
                            text='Xaritadan ko’rish'
                            style={{ marginTop: "20px" }}
                        />
                        <Button title="Ko' rib chiqish" />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.comforts}>
                        <div className={styles.place}>
                            <Title title='What this place offers' style={{ marginBottom: "15px" }} />
                            <InfoItem
                                url={oneRoomItemData.entireIcon}
                                title={oneRoomItemData.entire}
                                text={oneRoomItemData.entireText}
                            />
                            <InfoItem
                                url={oneRoomItemData.cleanIcon}
                                title={oneRoomItemData.clean}
                                text={oneRoomItemData.cleanText}
                            />
                            <InfoItem
                                url={oneRoomItemData.selfIcon}
                                title={oneRoomItemData.self}
                                text={oneRoomItemData.selfText}
                            />
                            <InfoItem
                                url={oneRoomItemData.freeIcon}
                                title={oneRoomItemData.free}
                            />
                        </div>
                        <Title title='What this place offers' style={{ marginTop: "30px" }} />
                        <div className={styles.rowBox}>
                            <div>
                                <InfoItem
                                    url={oneRoomItemData.gardenIcon}
                                    title={oneRoomItemData.garden}
                                />
                                <InfoItem
                                    url={oneRoomItemData.wifiIcon}
                                    title={oneRoomItemData.wifi}
                                />
                                <InfoItem
                                    url={oneRoomItemData.washerIcon}
                                    title={oneRoomItemData.washer}
                                />
                                <InfoItem
                                    url={oneRoomItemData.airIcon}
                                    title={oneRoomItemData.air}
                                />
                                <InfoItem
                                    url={oneRoomItemData.refrigeratorIcon}
                                    title={oneRoomItemData.refrigerator}
                                />
                            </div>
                            <div>
                                <InfoItem
                                    url={oneRoomItemData.kitIcon}
                                    title={oneRoomItemData.kit}
                                />
                                <InfoItem
                                    url={oneRoomItemData.petsIcon}
                                    title={oneRoomItemData.pets}
                                />
                                <InfoItem
                                    url={oneRoomItemData.dryerIcon}
                                    title={oneRoomItemData.dryer}
                                />
                                <InfoItem
                                    url={oneRoomItemData.cameraIcon}
                                    title={oneRoomItemData.camera}
                                />
                                <InfoItem
                                    url={oneRoomItemData.bikeIcon}
                                    title={oneRoomItemData.bike}
                                />
                            </div>
                        </div>
                        <Button onPress={() => show("amenities")} title='Show all 37 amenities' style={{ backgroundColor: "#fff", fontSize: "16px", boxShadow: "none", border: "1px solid #000", color: "#000" }} />
                    </div>
                    <div className={styles.filter}>
                        {oneRoomItemData.for === "Dam olish" ?
                            <BookingBox
                                price={`$ ` + oneRoomItemData.price}
                                time={oneRoomItemData.time}
                                total={`$ ` + total}
                                clickBtn={() => show("reserve")}
                            /> :
                            <ContactForm btnStyle={{
                                backgroundColor: "#DE3151",
                                color: "#fff",
                            }} />
                        }
                    </div>
                </div>
                <Footer />
                <ContactModal />
                <MoreTextModal />
                <ReserveModal />
                <AllAmenitiesModal />
            </div>
            <Script
                id="yandexx"
                src='./script.js'
                strategy="lazyOnload"
            />
        </>
    )
}

export default observer(ItemInfo) 
