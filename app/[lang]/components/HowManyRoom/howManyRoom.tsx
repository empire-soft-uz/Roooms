import { useTranslations } from 'next-intl'
import React from 'react'
import styles from "./howManyRoom.module.css"

interface Props {
    rooms: {
        rooms: number,
        itemRoomsKeys: string
    }[]
}

const HowManyRoom: React.FC<Props> = ({
    rooms
}) => {

    const t = useTranslations()

    return (

        <div className={styles.box}>
            {rooms.map((e, index) => {
                return (
                    <>
                        <p>{e.rooms}</p>
                        <p>{t(`${e.itemRoomsKeys}`)}</p>
                        {
                            index === rooms.length - 1 ? null : <div className={styles.dot}></div>
                        }
                    </>
                )
            })}
        </div>

    )
}

export default HowManyRoom
