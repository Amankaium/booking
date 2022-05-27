import React, {useState} from "react";
import s from "./FloorPlan.module.css"

const FloorPlan = (props) => {

    const[counter, setCounter] = useState(1)
    const increment = () => {
        setCounter(counter + 1)
        props.setPlace({
            ...props.place,
            guest: counter
        })
    }
    const decrement = () => {
        setCounter(counter - 1)
        props.setPlace({
            ...props.place,
            guest: counter
        })
    }

    const[counter2, setCounter2] = useState(1)
    const increment2 = () => {
        setCounter2(counter2 + 1)
        props.setPlace({
            ...props.place,
            bed: counter2
        })
    }
    const decrement2 = () => {
        setCounter2(counter2 - 1)
        props.setPlace({
            ...props.place,
            bed: counter2
        })
    }

    const[counter3, setCounter3] = useState(1)
    const increment3 = () => {
        setCounter3(counter3 + 1)
        props.setPlace({
            ...props.place,
            room: counter3
        })
    }
    const decrement3 = () => {
        setCounter3(counter3 - 1)
        props.setPlace({
            ...props.place,
            room: counter3
        })
    }

    const[counter4, setCounter4] = useState(1)
    const increment4 = () => {
        setCounter4(counter4 + 1)
        props.setPlace({
            ...props.place,
            bath: counter4
        })
    }
    const decrement4 = () => {
        setCounter4(counter4 - 1)
        props.setPlace({
            ...props.place,
            bath: counter4
        })
    }

    // function changeGuest(event) {
    //     props.setPlace({
    //         ...props.place,
    //         guest: event.target.value
    //     })
    // }
    // function changeBed(event) {
    //     props.setPlace({
    //         ...props.place,
    //         bed: event.target.value
    //     })
    // }
    // function changeRoom(event) {
    //     props.setPlace({
    //         ...props.place,
    //         room: event.target.value
    //     })
    // }
    // function changeBath(event) {
    //     props.setPlace({
    //         ...props.place,
    //         bath: event.target.value
    //     })
    // }
    

    return <div className={s.floorPlan}>
        <div className={s.guest}>
            <div>Гости</div>
            <div>Кровати</div>
            <div>Спальни</div>
            <div>Ванные</div>
        </div>
        <div className={s.quantity}>
            <div className={s.quantityItem}>
                <div className={s.sign} onClick={decrement}>-</div>
                <div>{counter}</div>
                <div className={s.sign} onClick={increment}>+</div>
            </div>                           
            <div className={s.quantityItem}>
                <div className={s.sign} onClick={decrement2}>-</div>
                <div>{counter2}</div>
                <div className={s.sign} onClick={increment2}>+</div>
            </div>                           
            <div className={s.quantityItem}>
                <div className={s.sign} onClick={decrement3}>-</div>
                <div>{counter3}</div>
                <div className={s.sign} onClick={increment3}>+</div>
            </div>                           
            <div className={s.quantityItem}>
            <div className={s.sign} onClick={decrement4}>-</div>
                <div>{counter4}</div>
                <div className={s.sign} onClick={increment4}>+</div>
            </div>       
        </div>
    </div>
}

export default FloorPlan;
