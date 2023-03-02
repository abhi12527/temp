// const num=12;
// if(num <12){
//     console.log("small number");
// }
// else{
//     console.log("large number");
// }

// console.log(`My first node app yayyyyyy......`);
// console.log(__dirname)
// setInterval(()=>{
//     console.log("Wooooo...")
// },100)
// const { selena } = require("./modules");
// sayHi(abhi);
// sayHi(selena);
// const names=require("./modules")
// // const sayHi=(name)=>{
// //     console.log(name);
// // }
// // sayHi("Jacob");
// // console.log(names)

// // sayHi(names.rahul)
// // sayHi(names.selena)
// // os moulde    ...
// const os=require("os");
// //info about current user
// const user=os.userInfo();
// console.log(user)

// //returns the system uptime
// console.log(`The system uptime is ${os.uptime} seconds.`);

// const currentOsInfp={
//     name:os.type(),
//     release:os.release(),
//     totalMemory:os.totalmem(),
//     freeMemory:os.freemem(),

// }
// console.log(currentOsInfp);


//info about path module

// const path=require('path');
// console.log(path.sep)

//read from filesystem
// const {readFileSync,writeFileSync}=require("fs")

// const first=readFileSync("./content/firsrt.txt",'utf-8')
// const second=readFileSync("./content/second.txt",'utf-8')

// console.log(first,second);

// writeFileSync('./content/result.txt',`Here is the result :${first}, ${second}`)

// console.log("dddd")
// const http=require("http");

// const server=http.createServer((req,res)=>{

// })

// server.listen(3000,()=>{
//     console.log("Listening on port 3000")
// })

// const {readFile}=require("fs");
// readFile("./content/second.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }else{
//         console.log(data);
//     }
// })

//EVENTS
// const eventEmitter=require('events');
// const cEmitter=new eventEmitter();

// cEmitter.on('response',()=>{
//     console.log('received')
// })
// cEmitter.on('response',()=>{
//     console.log('received bhubhubhu')
// })

// cEmitter.emit('response');

//STREAMS



// console.log(`express`)

// const {readFileSync}=require('fs');

// const homePage=readFileSync('./index.html')

// const http=require('http')
// const server=http.createServer((req,res)=>{
//    if(req.url =='/'){
//     res.writeHead(200,{'content-type':"text/html"})
//    res.write(homePage)
//    res.end()
//    }else if(req.url=='/contact'){
//     res.writeHead(200,{'content-type':"text/html"})
//    res.write('<h1>Contact Page</h1>')
//    res.end()

//    }else{
//     res.writeHead(404,{'content-type':"text/html "})
//    res.write('<h1>Error Page</h1>')
//    res.end()

//    }
// })

// server.listen(3000)

// const express=require('express');

// const app=express();
// app.get('/',(req,res)=>{
//    console.log('refreshed.....')
//    res.send('Home Page!!!');
// })

// app.get('/about',(req,res)=>{
//    res.send('Contact Page')
// })


// app.listen('5000',()=>{
//    console.log('Server is listening on port 5000...');
// })

const express=require('express');
const app=express();

app.get('/',(req,res)=>{

})

app.get('*',(req,res)=>{
   res.status(404).send('Resource not found!!!');
})


app.listen('12000',()=>{
   console.log('listeniing on 12000')
});

