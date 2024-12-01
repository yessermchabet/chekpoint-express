const express = require('express')

const app = express()

const port = 5000

const MiddleWareVerif=(req,res,next)=>{
   var currentDate = new Date()
   var currentHour = currentDate.getHours()
   var currentDay = currentDate.getDay()

   if (currentDay == 0 || currentDay == 6 || currentHour < 9 || currentHour > 17) {
       return res.send('arja3 ghodwa')
   }

   next()
}

app.use(MiddleWareVerif)

 app.get("/homepage",(req,res)=>{
    res.sendFile(__dirname+'/public/homepage.html')
 })

 app.get("/ourservices",(req,res)=>{
    res.sendFile(__dirname+'/public/ourservices.html')
 })

 app.get("/contactus",(req,res)=>{
    res.sendFile(__dirname+'/public/contactus.html')
 })

 app.get('/style.css',(req,res)=>{
    res.sendFile(__dirname+'/public/style.css')
 })


app.listen(port, console.log(`Server is running on the port ${port}`))