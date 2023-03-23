"use client"
import React, { CSSProperties, useState } from 'react'
import Button from '../Button/button'
import styles from "./contactForm.module.css"
import InputMask from 'react-input-mask';
import useRootStore from 'app/hooks/useRootStore';
import { observer } from 'mobx-react-lite';
import { Notifocation } from 'app/store/Notofication';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
interface Props {
    btnStyle?: CSSProperties;
}


const ContactForm: React.FC<Props> = ({
    btnStyle
}) => {
    const { t } = useTranslation()
    const [loading, setLoading] = useState(false)
    const { setForm, form, clearForm } = useRootStore().contactStore

    var data = {
        service_id: 'gmail',
        template_id: 'template_h1hc2b2',
        user_id: 'FEuV7bfFJHK9BHqxZ',
        template_params: {
            ...form
        }
    };

    const sendEmail = async () => {
        if (form.tel.length < 18) {
            Notifocation.error('Telefon raqamni to`liq kiriting')
            return
        }
        setLoading(true)
        await axios({
            method: 'post',
            url: 'https://api.emailjs.com/api/v1.0/email/send',
            data: data,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            Notifocation.success('Sizning murojatingiz qabul qilindi, tez fursatda siz bilan bog`lanamiz')
            clearForm()
        }).catch(err => {
            Notifocation.error('Xatolik yuz berdi')
        })
        setLoading(false)
    }

    return (
        <div className={styles.rightBox}>
            <div className={styles.formBox}>
                <div className={styles.form}>
                    <label>{t("name")}</label>
                    <input
                        name='name'
                        value={form.name}
                        onChange={(e) => setForm(e.target.value, "name")}
                        type="text"
                        placeholder={`${t("enter_name")}`}
                    />
                </div>
                <div className={styles.form} style={{ marginTop: "15px" }}>
                    <label>{t("phone_number")}</label>
                    <InputMask
                        className={styles.numberInput}
                        mask="+ \9\98 99 999 99 99"
                        maskChar=" "
                        alwaysShowMask={true}
                        name="tel"
                        value={form.tel}
                        onChange={(e) => setForm(e.target.value, 'tel')}
                    />
                </div>
                <div className={styles.form} style={{ marginTop: "15px" }}>
                    <label>{t("comment")}</label>
                    <textarea
                        name="message"
                        id="message"
                        value={form.comment}
                        placeholder={`${t("enter_comment")}`}
                        rows={4}
                        onChange={(e) => setForm(e.target.value, 'comment')}
                    ></textarea>
                </div>
                <Button
                    style={{ width: "100%", ...btnStyle }}
                    title={
                        loading ? <img src='/icons/Loader.svg' className={styles.loading} /> : `${t("send")}`
                    }
                    onPress={sendEmail}
                />
            </div>
        </div>
    )
}

export default observer(ContactForm)
