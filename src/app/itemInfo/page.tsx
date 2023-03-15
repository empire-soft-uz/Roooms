'use client'
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { ItemsType } from '../allData'
import AllAmenitiesModal from '../components/ModalComponents/AllAmenitiesModal/allAmenitiesModal'
import BookingBox from '../components/BookingBox/bookingBox'
import Button from '../components/Button/button'
import Carusel from '../components/Carusel/carusel'
import ContactForm from '../components/ContactForm/contactForm'
import ContactModal from '../components/ModalComponents/ContactModal/contactModal'
import Footer from '../components/Footer/footer'
import Header from '../components/Header/header'
import HowManyRoom from '../components/HowManyRoom/howManyRoom'
import InfoItem from '../components/InfoItem/infoItem'
import MainModalModal from '../components/ModalComponents/MainModal/mainModal'
import MoreBtn from '../components/MoreBtn/moreBtn'
import MoreTextModal from '../components/ModalComponents/MoreTextModal/moreTextModal'
import ReserveModal from '../components/ModalComponents/ReserveModal/reserveModal'
import RowItem from '../components/RowItem.tsx/rowItem'
import Text from '../components/Text/text'
import Title from '../components/Title/title'
import useRootStore from '../hooks/useRootStore'
import styles from "./itemInfo.module.css"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Script from "next/script"

const ItemInfo = () => {
    // const { oneItem } = useRootStore().itemStore
    const itemData: ItemsType = JSON.parse(localStorage.getItem("item") as never)
    const { show } = useRootStore().visibleStore
    const { dayCount } = useRootStore().itemStore
    var total = dayCount.day * Number(itemData.price)

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
                        <Title title={itemData.name} />
                        <HowManyRoom
                            room={itemData.room}
                            kitchen={itemData.kitchen}
                            bedroom={itemData.bedroom}
                            hall={itemData.hall}
                        />
                        <h3>{itemData.price + ` $ `}<span className={styles.time}> {itemData.time ? ` / ` + itemData.time : null}</span></h3>
                        {itemData.squarePrice ?
                            <p className={styles.text}>{itemData.squarePrice} $ / m<sup>2</sup></p>
                            : null
                        }
                        <RowItem
                            title={itemData.owner}
                            text="Kontaktlar"
                            clickBtn={() => show("contact")}
                        />
                        <Text
                            style={{ marginTop: "15px", fontFamily: "NunitoSansLight" }}
                            text={itemData.text.length >= 350 ? itemData.text.slice(0, 347) + ` ...` : itemData.text}
                        />
                        <MoreBtn onPress={() => show("moreText")} title='Show more' style={{ marginTop: "20px" }} />
                        <RowItem
                            title={itemData.location ? itemData.location : "Camchatka, Russia"}
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
                        <Title title='What this place offers' style={{ marginTop: "30px" }} />
                        <div className={styles.rowBox}>
                            <div>
                                <InfoItem
                                    url={itemData.gardenIcon}
                                    title={itemData.garden}
                                />
                                <InfoItem
                                    url={itemData.wifiIcon}
                                    title={itemData.wifi}
                                />
                                <InfoItem
                                    url={itemData.washerIcon}
                                    title={itemData.washer}
                                />
                                <InfoItem
                                    url={itemData.airIcon}
                                    title={itemData.air}
                                />
                                <InfoItem
                                    url={itemData.refrigeratorIcon}
                                    title={itemData.refrigerator}
                                />
                            </div>
                            <div>
                                <InfoItem
                                    url={itemData.kitIcon}
                                    title={itemData.kit}
                                />
                                <InfoItem
                                    url={itemData.petsIcon}
                                    title={itemData.pets}
                                />
                                <InfoItem
                                    url={itemData.dryerIcon}
                                    title={itemData.dryer}
                                />
                                <InfoItem
                                    url={itemData.cameraIcon}
                                    title={itemData.camera}
                                />
                                <InfoItem
                                    url={itemData.bikeIcon}
                                    title={itemData.bike}
                                />
                            </div>
                        </div>
                        <Button onPress={() => show("amenities")} title='Show all 37 amenities' style={{ backgroundColor: "#fff", fontSize: "16px", boxShadow: "none", border: "1px solid #000", color: "#000" }} />
                    </div>
                    <div className={styles.filter}>
                        {itemData.for === "Dam olish" ?
                            <BookingBox
                                price={`$ ` + itemData.price}
                                time={itemData.time}
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
