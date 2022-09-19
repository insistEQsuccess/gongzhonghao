import React, { useState } from 'react'
import {
  Radio,
  Space,
  Mask,
  Calendar,
  TreeSelect,
} from 'antd-mobile'
import { getCitys } from '@/api/url'
import HeightOptions from './height'
import './info.scss'

export default function Info () {
  const [showBirthday, setBirthday] = useState(false)
  const [showAddr, setAddrShow] = useState(false)
  const [showHeight, setHeightShow] = useState(false)
  const [addrOptions, setOptionsAddr] = useState([])
  const [formInline, setFormInline] = useState({
    birthday: '',
    addressName: '',
    addressCode: [],
    height: ''
  })
  const getAddrList = async () => {
    if (addrOptions.length) {
      setAddrShow(true)
      return;
    }
    let ret = await getCitys({})
    const data = ret.data.provList
    data.forEach(it => {
      it.areaList = it.cityList
      delete it.cityList
    })
    console.log(data)
    setOptionsAddr(data)
    setAddrShow(true)
  }
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
          onClick={() => setBirthday(true)}
        />
      </div>
    </div>
    <div className="info-item">
      <div className="item-top">3、请选择您的所在地</div>
      <div className="item-bottom">
        <input readOnly
          className='normal-text'
          value={formInline.addressName}
          onClick={() => getAddrList()}
        />
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
        <input
          readOnly
          className='normal-text'
          value={formInline.height}
          onClick={() => setHeightShow(true)}
        />
      </div>
    </div>
    <Mask visible={showBirthday}>
      <div className="mask-inner">
        <div className="birth-box">
          <Calendar
            selectionMode='single'
            onChange={val => {
              let y = val.getFullYear()
              let m = ((val.getMonth() + 1) + '').padStart(2, '0')
              let d = (val.getDate() + '').padStart(2, '0')
              let date = `${y}-${m}-${d}`
              console.log(date)
              setForm('birthday', date)
              setBirthday(false)
            }}
          />
        </div>
      </div>
    </Mask>
    <Mask visible={showAddr}>
      <div className="mask-inner">
        <TreeSelect
          fieldNames={{label: 'name', value: 'code', children: 'areaList'}}
          options={addrOptions}
          onChange={(value, nodes) => {
            console.log(value, nodes)
            if (value.length === 3) {
              setForm('addressName', nodes.options.map(it => it.name).join('-'))
              setForm('addressCode', value)
              setAddrShow(false)
            }
          }}
        />
      </div>
    </Mask>
    <Mask visible={showHeight}>
      <div className="mask-inner">
        <div className="hei-box">
          <div className="hei-title">请选择您的身高</div>
          <ul>
            {
              HeightOptions.map(it => <li
                  key={it.value}
                  data-value={it.value}
                  onClick={(e) =>{
                    console.log(e.target.dataset.value)
                    setForm('height', e.target.dataset.value)
                    setHeightShow(false)
                  }}
                >
                  {it.label}
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </Mask>
  </div>
}