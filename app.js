const express=require('express')
const app=express()

// database connection
require("./model/index")


app.set("view engine","ejs")
  
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/",(req,res)=>{
   res.render("blogs.ejs")
   
})
app.get("/createBlog",(req,res)=>{
    res.render("createblog.ejs")
})

// createBlog post
app.post("/createBlog",(req,res)=>{
    console.log(req.body)
})

app.listen(3000,function(){
console.log("Nodejs project has started")
})

