import './list.scss'

const data = [
  {
    id: 1,
    img: 'https://img0.baidu.com/it/u=567782244,1695500002&fm=253&fmt=auto&app=138&f=JPEG?w=753&h=500',
    age: 16,
    salary: 8000,
    name: '大聪明',
    sex: 1,
    house: 1,
    mobile: 1
  },
  {
    id: 2,
    img: 'https://img1.baidu.com/it/u=3146001118,2834468129&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
    age: 16,
    salary: 8000,
    name: '大聪明',
    sex: 1,
    house: 1,
    mobile: 1
  },
  {
    id: 3,
    img: 'https://img1.baidu.com/it/u=3146001118,2834468129&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
    age: 16,
    salary: 8000,
    name: '大聪明',
    sex: 0,
    house: 0,
    mobile: 0
  },
  {
    id: 4,
    img: 'https://img1.baidu.com/it/u=3146001118,2834468129&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
    age: 16,
    salary: 8000,
    name: '大聪明',
    sex: 0,
    house: 0,
    mobile: 0
  },
  {
    id: 5,
    img: 'https://img1.baidu.com/it/u=3705123043,2281640962&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=776',
    age: 16,
    salary: 8000,
    name: '大聪明',
    sex: 1,
    house: 1,
    mobile: 1
  },
  {
    id: 6,
    img: 'https://img1.baidu.com/it/u=3146001118,2834468129&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
    age: 16,
    salary: 8000,
    name: '大聪明',
    sex: 0,
    house: 0,
    mobile: 0
  },
  {
    id: 7,
    img: 'https://img1.baidu.com/it/u=3705123043,2281640962&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=776',
    age: 16,
    salary: 8000,
    name: '大聪明',
    sex: 1,
    house: 1,
    mobile: 1
  },
  {
    id: 8,
    img: 'https://img1.baidu.com/it/u=3705123043,2281640962&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=776',
    age: 16,
    salary: 8000,
    name: '大聪明',
    sex: 1,
    house: 1,
    mobile: 1
  },
  {
    id: 9,
    img: 'https://img1.baidu.com/it/u=3705123043,2281640962&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=776',
    age: 16,
    salary: 8000,
    name: '大聪明',
    sex: 1,
    house: 1,
    mobile: 1
  },
  {
    id: 10,
    img: 'https://img1.baidu.com/it/u=3705123043,2281640962&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=776',
    age: 16,
    salary: 8000,
    name: '大聪明',
    sex: 1,
    house: 1,
    mobile: 1
  },
]
function goToDetail () {
  
}
export default function List () {
  return <div className="list-box">
    <div className="list-inner">
      {
        data.map(it => 
          <div className="list-item" key={it.id} onClick={goToDetail}>
            <div className="item-img">
              <img src={it.img} alt="" />
              <div className="img-msg">
                <span>{it.age}岁</span>
                <span>{it.salary}元/月</span>
              </div>
            </div>
            <div className="item-person">
              <div className="person-left">
                <span>{it.name}</span>
                <span className="icon iconfont icon-nanxing"></span>
              </div>
              <div className="person-right">
                <span className="icon iconfont icon-shumashouji"></span>
                <span className="icon iconfont icon-shumashouji"></span>
                <span className="circle car">车</span>
                <span className="circle house">房</span>
              </div>
            </div>
          </div>
        )
      }
    </div>
    {/* <div className="list-item">
      <div className="item-img">
        <img src="https://img1.baidu.com/it/u=153079648,553512087&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=356" alt="" />
        <div className="item-img-msg">
          <span>18岁</span>
          <span>8000元/月</span>
        </div>
      </div>
      <div className="item-person">
        <div className="person-name">
          <span>大聪明</span>
          <span className="icon iconfont icon-nanxing male"></span>
        </div>
        <div className="person-msg">
          <span className="icon iconfont icon-shumashouji"></span>
          <span className="house">房</span>
        </div>
      </div>
    </div> */}
  </div>
}