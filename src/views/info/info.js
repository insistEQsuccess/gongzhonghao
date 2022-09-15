import React, { useState, useEffect } from 'react'
import {
  Radio,
  Space,
  Mask,
  Calendar,
  TreeSelect
} from 'antd-mobile'
import { getCitys } from '@/api/url'
import './info.scss'

export default function Info () {
  useEffect(() => {
    const getData = async () => {
      let ret = await getCitys({})
      console.log(ret)
    }
    getData()
  })
  const [showMask, setShowMask] = useState(false)
  const [formInline, setFormInline] = useState({
    birthday: ''
  })
  function setForm (key, value) {
    setFormInline((prev) => {
      return {
        ...prev,
        [key]: value
      }
    })
  }
  return <div className='info-box'>
    <div className="info-item">
      <div className="item-top">1、选择性别</div>
      <div className="item-bottom">
        <Radio.Group defaultValue=''>
          <Space style={{ '--gap': '1rem' }}>
            <Radio value='1'>男</Radio>
            <Radio value='2'>女</Radio>
          </Space>
        </Radio.Group>
      </div>
    </div>
    <div className="info-item">
      <div className="item-top">2、请选择出生年月</div>
      <div className="item-bottom">
        <input readOnly
          className='normal-text'
          value={formInline.birthday}
          onClick={() => setShowMask(true)}
        />
      </div>
    </div>
    <div className="info-item">
      <div className="item-top">3、请选择您的所在地</div>
      <div className="item-bottom">
        <input readOnly className='normal-text' value={formInline.birthday} onClick={() => setShowMask(true)} />
      </div>
    </div>
    <div className="info-item">
      <div className="item-top">4、请选择婚姻状态</div>
      <div className="item-bottom">
        <Radio.Group defaultValue=''>
          <Space direction='vertical'>
            <Radio value='1'>未婚</Radio>
            <Radio value='2'>离异，无子女</Radio>
            <Radio value='3'>离异，带子女</Radio>
            <Radio value='4'>离异，子女归对方</Radio>
            <Radio value='5'>丧偶</Radio>
          </Space>
        </Radio.Group>
      </div>
    </div>
    <div className="info-item">
      <div className="item-top">3、请选择您的身高</div>
      <div className="item-bottom">
        <input readOnly className='normal-text' value={formInline.birthday} onClick={() => setShowMask(true)} />
      </div>
    </div>
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
            setForm('birthday', date)
            setShowMask(false)
          }}
        />
      </div>
    </Mask>
  </div>
}