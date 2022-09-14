const Router = require('koa-router')
const router = new Router()

router.post('/', async (ctx) => {
  console.log('哈哈哈哈啊~~~~~')
  const xml = ctx.request.body;
  console.log('xml');
  console.log(xml);
	const createTime = Date.parse(new Date());
	const msgType = xml.xml.MsgType[0];
	const toUserName = xml.xml.ToUserName[0];
	const toFromName = xml.xml.FromUserName[0];
	const event = xml.xml.Event ? xml.xml.Event[0] : '';
	if(msgType == 'event' && event == 'subscribe'){ //关注后
		ctx.body = `<xml>
		 <ToUserName><![CDATA[${toFromName}]]></ToUserName>
		 <FromUserName><![CDATA[${toUserName}]]></FromUserName>
		 <CreateTime>${createTime}</CreateTime>
		 <MsgType><![CDATA[text]]></MsgType>
		 <Content><![CDATA[欢迎关注陈小皮公众号，下面请开始你的表演！]]></Content>
		 </xml>`;
	}else{//其他情况
		ctx.body = `<xml>
		 <ToUserName><![CDATA[${toFromName}]]></ToUserName>
		 <FromUserName><![CDATA[${toUserName}]]></FromUserName>
		 <CreateTime>${createTime}</CreateTime>
		 <MsgType><![CDATA[text]]></MsgType>
		 <Content><![CDATA[啊~啊~啊~你在发什么消息？]]></Content>
		 </xml>`;
	}	
})

module.exports = { routes: router.routes(), allowedMethods:router.allowedMethods() }