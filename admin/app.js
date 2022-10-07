const express=require('express')
const app=express()

//db
const conexion=require('./database/db')
conexion.once('open',()=>console.log('Connect mongodb'))
conexion.on('error',()=>console.log("error"))


//adminbro
const AdminBro=require('admin-bro')
const expressAdminBro=require('@admin-bro/express')
const mongooseAdminBro=require('@admin-bro/mongoose')

//models
const User=require('./models/User')
const Post=require('./models/Post')

AdminBro.registerAdapter(mongooseAdminBro)
const AdminBroOptions={resources:[User,Post]}

const adminBro=new AdminBro(AdminBroOptions)
const router= expressAdminBro.buildRouter(adminBro)
app.use(adminBro.options.rootPath,router)

app.get('/',(req,res)=>{
    res.send('Dashboard con Node')
})

app.listen(8000,()=>{
    console.log('Server up en http://localhost:8000/admin');
})  