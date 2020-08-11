const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages.js')

//configurar nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
//receber os dados do req.body
.use(express.urlencoded({ extended: true }))
//configurar arquivos estáticos (css, arquivos, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(58287);