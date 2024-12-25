const express = require("express");
const app = express();


// // app.use("/hello", (req, res) => {
// //     res.send("Hello, hello!");
// // });
// // app.use('/hey', (req, res)=>{
// //     res.send("hey ..")
// // })
// // app.use("/", (req, res) => {
// //     res.send("Hello, world!");
// // });

// // app.get("/hello", (req, res) => {
// //         res.send("Get call!");
// //     });
// app.post("/user",(req, res)=>{

//     res.send("post call")
// })
    

// app.get("/user",(req , res, next)=>{
// // res.send("Response 1") //if i comment out this and i want to go to next response so next should be used ..without using the next the empty next then we console without the res.send iot will be printed as the sending the respone
// console.log('response')
// next();
// },
// (req, res)=>{
// res.send("response 2")
// });

// app.get("/admin/getdata", (req, res)=>{
//     //logic of checking if the request is authourized
//     const token="Abc";
//     const isAdminAuthorizedPerson=token==="xyz"
//     if (isAdminAuthorizedPerson){
//         res.send("Sent all the data")
//     }else {
//         res.status(401).send("unauthorized request")
//     }
   
// })

// handling auth middleware for all the get post....
app.use("/admin",(req, res, next)=>{
    console.log("Admin auth gets checked")
    const token="xyz"
    const isAadminauthed= token ==="xyz"
    if(!isAadminauthed){
        res.status(401).send("unauthorized")
    }else
    next();
});

app.get("/admin/getData",(req, res)=>{
    res.send("all data sent")
})
app.get("/admin/deletedata",(req, res)=>{
    res.send("all data Deleted")
})



app.listen(8080, () => {
    console.log("Server running on port 8080");
});

