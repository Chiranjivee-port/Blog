const express=require('express')
const { blogs } = require('./model/index')
const app=express()

// database connection
require("./model/index")


app.set("view engine","ejs")
  
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/",async (req,res)=>{
    //table bata data nikalnu paryo
    const allBlogs =await blogs.findAll()
    console.log(allBlogs)


   res.render("blogs.ejs",{blogs:allBlogs})  //{} :dyanmic data ejs bata display garna 
   
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
    //res.send("Form submitted succesfully")

    res.redirect("/")
    
    //data base bata data nikalney
})

app.listen(3000,function(){
console.log("Nodejs project has started")
})

