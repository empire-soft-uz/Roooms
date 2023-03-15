import React from 'react'
import Button from '../Button/button';
import Calendar from '../Calendar/calendar';
import styles from "./bookingBox.module.css"

interface Props {
    price?: string;
    total?: number | string;
    clickBtn?: () => void;
    time?: string;
}

const BookingBox: React.FC<Props> = ({
    price,
    total,
    time,
    clickBtn,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.price}>
                <p>{price} <span className={styles.time}>/ {time}</span></p>
            </div>
            <div className={styles.dateBox}>
                <Calendar />
            </div>
            <div className={styles.btnBox}>
                <Button
                    style={{
                        backgroundColor: "#DE3151",
                        color: "#fff",
                        width: "100%",
                        margin: "0"
                    }}
                    title='Reserve'
                    onPress={clickBtn}
                />
            </div>
            <div className={styles.totalBox}>
                <p>Total</p>
                <p>{total}</p>
            </div>
        </div>
    )
}

export default BookingBox
