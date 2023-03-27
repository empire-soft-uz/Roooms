import React from 'react';
import styles from "./itemComponent.module.css";

interface Props {
    image?: string;
    forr?: string;
    name?: string;
    price?: string;
    time?: string;
    type?: string;
    size?: string;
    many?: string;
    floor?: string;
    location?: string;
    onPress?: () => void;
}

const ItemComponent: React.FC<Props> = ({
    image,
    forr,
    name,
    price,
    time,
    type,
    size,
    many,
    floor,
    location,
    onPress
}) => {
    return (
        <div className={styles.container} onClick={onPress}>
            <div className={styles.imgBox}>
                <img className={styles.cardImg} src={image} alt="" />
                {/* <div className={styles.kuula}>
                    <iframe width="100%" height="640" frameBorder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowFullScreen scrolling="no" src={image}></iframe>
                </div> */}
                <div className={styles.dImgBox}>
                    <img className={styles.dImg} src="/icons/360.svg" alt="" />
                </div>
                <button className={styles.aboveBtn}>{forr}</button>
            </div>
            <div className={styles.content}>
                <div className={styles.topBox}>
                    <h3>{name}</h3>
                    <div className={styles.price}>
                        <p style={{ fontSize: "14px" }}>$ {price} <span style={{ color: "#AEAEAE", fontSize: "12px" }}>{time ? `/ ` + time : null}</span> </p>
                        <p style={{ color: "#AEAEAE", display: "flex", alignItems: "center" }}>
                            <img src="/icons/home.svg" alt=""
                                style={{
                                    marginRight: "5px"
                                }} />
                            {type}
                        </p>
                    </div>
                </div>
                <div className={styles.centerBox}>
                    <div className={styles.info}>
                        <img src="/icons/area.svg" alt="" />
                        <p>{size} <sup className={styles.square}>2</sup></p>
                    </div>
                    <div className={styles.info}>
                        <img src="/icons/door.svg" alt="" />
                        <p>{many}</p>
                    </div>
                    <div className={styles.info}>
                        <img src="/icons/layer.svg" alt="" />
                        <p>{floor}</p>
                    </div>
                </div>
                <div className={styles.bottomBox}>
                    <img src="/icons/map.svg" alt="" />
                    <h4>{location}</h4>
                </div>
            </div>
        </div>
    )
}

export default ItemComponent
