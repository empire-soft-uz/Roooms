import useRootStore from 'app/hooks/useRootStore';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import styles from "./carusel.module.css";

const Carusel = () => {

    const { oneRoomItemData } = useRootStore().itemStore

    const [active, setActive] = useState<{
        id: number,
        image: string,
        image360: string
    }>(oneRoomItemData.images[0])


    return (
        <div className={styles.container} style={{}} >
            <div className={styles.imageBox360}>
                <iframe width="100%" height="100%" frameBorder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowFullScreen scrolling="no" src={active?.image360 || ''}></iframe>
            </div>
            <div className={styles.imageBox}>
                {oneRoomItemData?.images.map((e: any, index: number) => {
                    return (
                        <div className={styles.itemBox} style={{ border: active?.id === e.id ? "3px solid #3075C6" : "none" }} key={index} onClick={() => setActive(e)}>
                            <img src={e.image} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default observer(Carusel)
