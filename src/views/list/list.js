import './list.scss'

console.log(process.env.REACT_APP_BASE_API_URL)
export default function List () {
  return <div className="list-box">
    <div className="list-inner">
      <div className="list-item">
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
          </div>
        </div>
        <div className="item-msg">
          求偶偏向：我更看重对方的性格，踏踏实实过日子
        </div>
      </div>
    </div>
  </div>
}