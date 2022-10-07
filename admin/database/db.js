const mongoose=require('mongoose')
const url='mongodb+srv://Laman:rBd8q8Tq2iwWIUZC@cluster0.m9czfiv.mongodb.net/AdminPanelDB?retryWrites=true&w=majority'
mongoose.connect(url)
const conexion=mongoose.connection

module.exports=conexion