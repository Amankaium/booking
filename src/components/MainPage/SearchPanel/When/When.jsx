import { useEffect, useRef, useState } from 'react'
import s from './When.module.css';
import when from "../../../../assets/icons/when.svg";
import { DateRangePicker } from 'react-date-range'

import format from 'date-fns/format'
import { addDays } from 'date-fns'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'


const When = () => {

    // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: 'selection'
    }
  ])

  // open close
  const [open, setOpen] = useState(false)

  // get the target element to toggle 
  const refOne = useRef(null)

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true)
    document.addEventListener("click", hideOnClickOutside, true)
  }, [])

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if( e.key === "Escape" ) {
      setOpen(false)
    }
  }

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if( refOne.current && !refOne.current.contains(e.target) ) {
      setOpen(false)
    }
  }
    
    return (  
        <div className={s.whenCalender}>
            <p className={s.caption} >Прибытие/Выезд</p>
            <img className={s.when} src={when} alt="calender-icon" />
            <input className={s.whenInput} type="text" autoComplete="off" name='date' placeholder='Когда?' 
            value={`${format(range[0].startDate, "dd/MM/yyyy")} до ${format(range[0].endDate, "dd/MM/yyyy")}`}
            readOnly
            onClick={ () => setOpen(open => !open) }/>
            
            <div ref={refOne}>
                {open && 
                    <div className={s.dropdownContent} >
                        <DateRangePicker
                        onChange={item => setRange([item.selection])}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={range}
                        months={2}
                        direction="horizontal"
                        className="calendarElement"
                        />
                    </div>
                }
            </div>
            
        </div>
    )
}

export default When;