const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")

const EmployeeModel = require('.models/customers')

const app = express()
app.use(express.json)
app.use(cors())

mongoose.connect('mongodb://localhost:27017/Digitalshoe')

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employee => res.json(customers))
    .catch(err => res.json(err))

})

const UserSchema = mongoose.Schema({
    name:String
})

app.get("/register", (req, res)=> {

})

app.listen(3001, () => {
    console.log("server is on bingo")
})