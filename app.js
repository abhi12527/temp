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
const {readFileSync,writeFileSync}=require("fs")

const first=readFileSync("./content/firsrt.txt",'utf-8')
const second=readFileSync("./content/second.txt",'utf-8')

console.log(first,second);

writeFileSync('./content/result.txt',`Here is the result :${first}, ${second}`)
