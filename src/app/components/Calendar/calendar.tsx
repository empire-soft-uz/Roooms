import useRootStore from '@/app/hooks/useRootStore';
import React, { useState } from 'react'
// import { DateRangePicker } from 'rsuite';
// const { beforeToday } = DateRangePicker;
// import 'rsuite/dist/rsuite.min.css';
import styles from "./calendar.module.css"
import { DateRangePicker } from '@react-spectrum/datepicker';
import { parseDate } from '@internationalized/date';
import { Button, defaultTheme, Provider } from '@adobe/react-spectrum';

import { isSameMonth, today } from '@internationalized/date';

const Calendar = () => {
  const { setDay } = useRootStore().itemStore
  const [date, setDate] = useState({ dataStart: '', dataEnd: '' })
  //@ts-ignore
  const count = date.dataEnd - date.dataStart
  setDay(count)

  return (
    <Provider minWidth={"100%"} minHeight={"100%"} colorScheme={'light'} theme={defaultTheme}>
      <DateRangePicker
        height="100%"
        width="100%"
        aria-label='date picker'
        //@ts-ignore
        minValue={today()}
        //@ts-ignore
        onChange={(value) => setDate({
          //@ts-ignore
          dataStart: new Date(`${value.start.month + " " + value.start.day + " " + value.start.year}`), dataEnd: new Date(`${value.end.month + " " + value.end.day + " " + value.end.year}`)
        })} />
    </Provider>
  )
}

export default Calendar

