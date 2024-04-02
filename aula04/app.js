//criar e deletar arquivo
const fs=require('fs');

fs.appendFile('C',"Loguei\n",(erro=>{
    console.log(erro)
}))

//apagar arquivo
if(fs.existsSync('Logs.log')){
    fs.rmSync('logs.log')
}
console.log('fim da execução')