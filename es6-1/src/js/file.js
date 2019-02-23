const fs = require('fs');

function readFile(url){
    return new Promise((resolve,reject) => {
        fs.readFile(url,'utf8',(error,data) => {
            if(error){
                return reject(error);
            }else{
                resolve(data);
            }
        })
    })
}

async function getFile(){
    let tpl = await readFile('./template.html');
    let css = await readFile('./style.css');
    return tpl.replace('{{style}}',`<style>${css}</style>`)
}

getFile().then((res) => {
    console.log(res)
})

