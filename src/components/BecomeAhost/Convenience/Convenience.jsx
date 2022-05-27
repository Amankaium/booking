import React, {useState} from "react";
import s from "./Convenience.module.css"
import wifi from "../../../assets/icons/wifi.svg"
import tv from "../../../assets/icons/tv.svg"
import ktchn from "../../../assets/icons/kitchen.svg"
import washmash from "../../../assets/icons/washingmachine.svg"
import ac from "../../../assets/icons/aircon.svg"
import medicine from "../../../assets/icons/medicine.svg"

const Convenience = (props) => {


    const[wifiActive, setWifiActive] = useState(false)
    const[tvActive, setTvActive] = useState(false)
    const[ktchnActive, setKtchnActive] = useState(false)
    const[wshActive, setWshActive] = useState(false)
    const[acActive, setAcActive] = useState(false)
    const[drgActive, setDrgActive] = useState(false)

    const HandleClick = (type) => {
        if (type === "wi-fi") {
            setWifiActive(!wifiActive)
            props.setPlace({...props.place, wifi: "wi-fi"})
        } else if (type === "Телевизор") {
            setTvActive(!tvActive)
            props.setPlace({...props.place, tv: "Телевизор"})
        } else if (type === "Кухня") {
            setKtchnActive(!ktchnActive)
            props.setPlace({...props.place, kitchen: "Кухня"})
        } else if (type === "Стиральная машина") {
            setWshActive(!wshActive)
            props.setPlace({...props.place, washmash: "Стиральная машина"})
        } else if (type === "Кондиционер") {
            setAcActive(!acActive)
            props.setPlace({...props.place, conditioner: "Кондиционер"})
        } else if (type === "Аптечка") {
            setDrgActive(!drgActive)
            props.setPlace({...props.place, medicine: "Аптечка"})
        }
    }
    
    return (
        <div>
            <h3 className={ s.title }>Вы предлагаете эти популярные среди гостей удобства?</h3>
            <div className={ s.convenience }>
                <div className={ s.convenienceItem } onClick={() => HandleClick ("wi-fi")} 
                    style={{
                        border: wifiActive ? "1px solid black" : '1px solid lightgrey'
                    }}>
                        <img className={ s.convenienceIcon } src={wifi} alt="wifiIcon" />
                        WI-FI
                </div>
                <div className={ s.convenienceItem } onClick={() => HandleClick ("Телевизор")} 
                    style={{
                        border: tvActive ? "1px solid black" : '1px solid lightgrey'
                    }}>
                        <img className={ s.convenienceIcon } src={tv} alt="tvIcon" />
                        Телевизор
                </div>
                <div className={ s.convenienceItem } onClick={() => HandleClick ("Кухня")} 
                    style={{
                        border: ktchnActive ? "1px solid black" : '1px solid lightgrey'
                    }}>
                        <img className={ s.convenienceIcon } src={ktchn} alt="ktchnIcon" />
                        Кухня
                </div>
                <div className={ s.convenienceItem } onClick={() => HandleClick ("Стиральная машина")} 
                    style={{
                        border: wshActive ? "1px solid black" : '1px solid lightgrey'
                    }}>
                        <img className={ s.convenienceIcon } src={washmash} alt="washingMashineIcon" />
                        Стиральная машина
                </div>
                <div className={ s.convenienceItem } onClick={() => HandleClick ("Кондиционер")} 
                    style={{
                        border: acActive ? "1px solid black" : '1px solid lightgrey'
                    }}>
                        <img className={ s.convenienceIcon } src={ac} alt="airConditionerIcon" />
                        Кондиционер
                </div>
                <div className={ s.convenienceItem } onClick={() => HandleClick ("Аптечка")} 
                    style={{
                        border: drgActive ? "1px solid black" : '1px solid lightgrey'
                    }}>
                        <img className={ s.convenienceIcon } src={medicine} alt="medicineIcon" />
                        Аптечка
                </div>
            </div>
        </div>
    
    )
}

export default Convenience;