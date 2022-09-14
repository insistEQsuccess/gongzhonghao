import './detail.scss';
const women = require('../../assets/women.png');
const female = require('../../assets/female.png');
const heart = require('../../assets/heart.png');
const sweet = require('../../assets/sweet.gif');

function HomeComp () {
  return <div className='detail-box'>
    <ul className="fav-box">
      <li><span>讨厌所有晴天以外的天气</span></li>
      <li><span>可是如果你来</span></li>
      <li><span>风雨雷电我都陪你</span></li>
      <img className='sweet' src={sweet} alt=""/>
      <li><span>主动一点</span></li>
      <li>
        <span>也许你的命定爱情就在这里</span>
        <img src={heart} alt=""/>
      </li>
    </ul>
    <div className='guest'>▼▼今日推荐嘉宾▼▼</div>
    <div className='msg'>与其等待爱情，不如主动出击！</div>
    <div className="pic-top">
      <img src={female} alt=""/>
      征婚交友
    </div>
    <div className="pic-box">
      <img src={women} alt=""/>
    </div>
    <div className="info-title">
      <div className="info-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
      自我介绍
    </div>
    <ul className="info-box">
      <li>会员号：<span>2111121320</span></li>
      <li>性别：<span>女</span></li>
      <li>出生年月：<span>1990-05-02</span></li>
      <li>属相：<span>马</span></li>
      <li>身高：<span>162 CM</span></li>
      <li>体重：<span>55 KG</span></li>
      <li>婚姻状况：<span>离异</span></li>
      <li>有无子女：<span>无小孩</span></li>
      <li>星座：<span>巨蟹座</span></li>
      <li>民族：<span>汉族</span> </li>
      <li>学历:  <span>专科</span></li>
      <li>目前所在地：<span>河南省 鹤壁市</span></li>
      <li>籍贯所在：<span>河南省 安阳市 *</span></li>
    </ul>
    <div className="info-title">
      <div className="info-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
      择偶要求
    </div>
    <ul className="info-box">
      <li>年龄：<span>30 岁 ~ 35 岁</span></li>
      <li>婚姻状况：<span>不限</span></li>
      <li>身高：<span>172 CM ~ 180 CM</span></li>
      <li>民族：<span>汉族</span></li>
    </ul>
  </div>
}
export default HomeComp;