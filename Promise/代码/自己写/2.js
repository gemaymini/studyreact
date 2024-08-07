const fs=require('fs');
// fs.readFile('./context.txt',(err,data)=>{
//     if(err) throw err;
//     console.log(data.toString());
// }
//);

let p=new Promise((Resolve,reject)=>{
    fs.readFile("./context.txt",(err,data)=>{
        if(err) reject(err);
        Resolve(data.toString());
    });
});

p.then(data=>{console.log(data.toString());},err=>{throw err})