const Router = require('koa-router')
const router = new Router()
const crypto = require('crypto');

const config = {
  wechat: {
    appID:"wx5b295da0389bdbf0",
    appsecret:"adb88c32a0029935cfde816c3349656d",
    //这里你得填写你自己设置的Token值
    token:"xiangqingongzhonghao",
  }
}

router.get('/validate/wx', async (ctx) => {
  //ctx.query获取请求中携带的参数
  let token=config.wechat.token;
  //获取请求中的signature
  let signature=ctx.query.signature;
  //获取请求中的timestamp
  let timestamp=ctx.query.timestamp;
  //获取请求中的nonce
  let nonce=ctx.query.nonce;
  //获取请求中的echostr
  let echostr=ctx.query.echostr;
  //将Token，timestamp，nonce按字典排序,排序后链接成一个字符串
  let str=[token,timestamp,nonce].sort().join("");
  // 加密
  const hash = crypto.createHash('sha1');
  const sha1Str = hash.update(str).digest('hex')
  if (sha1Str === signature) {
    ctx.body=echostr;
  } else {
    ctx.body="wrong1";
  }
})

module.exports = { routes: router.routes(), allowedMethods:router.allowedMethods() }