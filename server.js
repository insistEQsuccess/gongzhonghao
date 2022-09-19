const Koa = require("koa")
const serve = require("koa-static")
const app = new Koa()
app.use(serve(__dirname+"/build"))
app.listen(3001,function(){
    console.log("koa server running at port 3001");
})