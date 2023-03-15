import React from 'react'
import { useTranslation } from 'react-i18next';

const ChooseLanguage = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng: any) => {
        i18n.changeLanguage(lng);
    };
    return (
        <div>
            <select
                style={{
                    border: "none", outline: "none",
                    width: "50px",
                    color: "#AEAEAE",
                    cursor: "pointer",
                    marginRight: "30px"
                }}

            >
                <option
                    value="uzb">
                    UZB
                </option>
                <option
                    value="rus">
                    RUS
                </option>
            </select>
            {/* ))} */}
        </div >
    )
}

export default ChooseLanguage
