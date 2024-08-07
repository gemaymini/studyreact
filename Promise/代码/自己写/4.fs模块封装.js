function mineReadFile(path)
{
    return new Promise((resolve, reject)=>{
        require('fs').readFile(path,(err,data)=>{
            if(err)    reject(err);
            else    resolve(data);
        });

    });
}
mineReadFile('./context.txt')
.then((data)=>{
    console.log(data.toString());
},(err)=>{
    console.log(err);
})
