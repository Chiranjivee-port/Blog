const express=require('express')
const { blogs } = require('./model/index')
const app=express()

// database connection
require("./model/index")


app.set("view engine","ejs")
  
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/",(req,res)=>{
   res.render("blogs.ejs")
   
})

app.get("/createBlog", (req,res)=>{
    res.render("createblog.ejs")
})

// createBlog post
app.post("/createBlog",async (req,res)=>{
    
    const title = req.body.title
    const description =req.body.description
    const subTitle = req.body.subtitle

    await blogs.create({
        title :title,
        subTitle : subTitle,
        description : description
    })
    // //next method
    // const{title,description,subtitle} =req.body
    res.send("Form submitted succesfully")
    
})

app.listen(3000,function(){
console.log("Nodejs project has started")
})

