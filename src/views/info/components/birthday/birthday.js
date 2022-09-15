import React, { useState } from 'react'
import { Mask } from 'antd-mobile'

export default function Birthday () {
  const [showMask, setShowMask] = useState(false)
  
  return <div className='birthday-box'>
    <Mask visible={showMask}>
      <div className="mask-inner">
        <Calendar
          selectionMode='single'
          onChange={val => {
            let y = val.getFullYear()
            let m = ((val.getMonth() + 1) + '').padStart(2, '0')
            let d = (val.getDate() + '').padStart(2, '0')
            let date = `${y}-${m}-${d}`
            console.log(date)
            // setBirthday(date)
            setShowMask(false)
          }}
        />
      </div>
    </Mask>
  </div>
}