const http = require('http')
const PORT = 4000
const os = require('os')
const url = require('url')
const fs = require('fs')

// atv01
// console.log(os.arch())
// console.log(os.freemem())
// console.log(os.homedir())
// const content = [
//     {sistema: 'x64'},
//     {memoria: '1324093440'},
//     {diretorio: 'C:\Users\3°F'},
// ]
// const json = JSON.stringify(content)
// console.log(json)

// const server = http.createServer((req,res)=>{
//     res.setHeader(200,{'Content-Type':'application/json'})
//     res.write(json)
//     res.end()
// })
// server.listen(PORT, ()=>{
//     console.log(`Server ON em ${PORT}`)
// })

// atv02

// const address = {
//     protocol: 'https',
//     host: 'al.senai.br',
//     hash: 'planodecurso.pdf',
//     pathname: '/tecnico-em-informatica-para-internet',
//     extends: 'pdf',
//     path: '/tecnico-em-informatica-para-internet',
//     name: 'planoderecurso',
//     href: 'https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf'
// }

// console.log(address.href)
// console.log(address.hash)
// console.log(address.extends)
// console.log(address.name)

// atv03
// const urlObject = {
//     protocol: 'http:',
//     host: 'nodejs.org',
//     hostname: 'nodejs.org',
//     hash: '#url_new_url_input_base',
//     pathname: '/api/url.html',
//     path: '/api/url.html',
//     href: 'https://nodejs.org/api/url.html#url_new_url_input_base',
// }

// const urlString2 = url.format(urlObject)

// console.log(urlObject.protocol)
// console.log(urlObject.host)
// console.log(urlObject.hostname)
// console.log(urlObject.hash)
// console.log(urlObject.pathname)
// console.log(urlObject.path)
// console.log(urlObject.href)

// atv04

const arqAntigo = 'index.js'
const arqNovo = 'renomed.js'

fs.rename(arqAntigo, arqNovo, function(err){
    if(err){
        console.log(err)
        return
    }
    console.log(`O arquivo ${arqAntigo} foi renomeado para ${arqNovo}`)
})

// atv 05
// console.log(os.cpus())