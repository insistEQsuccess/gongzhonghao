import React, { useEffect, useState } from 'react';
import './list.scss'
import { getList } from '@/api/url'

export default function List () {
  const [list, setList] = useState([])
  useEffect(() => {
    const getData = async () => {
      const res = await getList({})
      if (res.code === 100000) {
        setList(res.data.visitingCardVos)
      }
    }
    getData()
  }, [])

  return <div className="list-box">
    <div className="list-inner">
      {
        list.map((it, ind) => <div className="list-item" key={ind}>
            <div className="item-box">
              <div className="img-box">
                <img src={it.icon} alt="" />
              </div>
              <div className="info-box">
                <div className="info-top">
                  <div className="info-msg">昵称：{it.nickName}</div>
                  <div className="info-main">{it.title}</div>
                </div>
                <div className="info-divider"></div>
                <div className="info-bottom">
                  {/* <div className="info-msg">月薪：10000元/月 独生子</div> */}
                  <div className="info-msg">{it.userTagList.map(item=> item.tagName).join(' ')}</div>
                </div>
                <div className="info-divider"></div>
              </div>
            </div>
            <div className="item-msg">{it.spouseKeypointValue}</div>
          </div>
        )
      }
      {/* <div className="list-item">
        <div className="item-box">
          <div className="img-box">
            <img src="https://img0.baidu.com/it/u=1272789009,3467927439&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="" />
          </div>
          <div className="info-box">
            <div className="info-top">
              <div className="info-msg">昵称：大聪明</div>
              <div className="info-main">男-1992-离异-天津</div>
            </div>
            <div className="info-divider"></div>
            <div className="info-bottom">
              <div className="info-msg">月薪：10000元/月 独生子</div>
              <div className="info-msg">有车 有房 无房贷 身高180</div>
            </div>
            <div className="info-divider"></div>
          </div>
        </div>
        <div className="item-msg">
          求偶偏向：我更看重对方的性格，踏踏实实过日子
        </div>
      </div> */}
    </div>
  </div>
}