const express = require('express')
const mongoose = require('mongoose');
const UserSchema = require('./model/UserSchema');
const app = express()
const port = 3851
app.use(express.json())

mongoose.connect('mongodb+srv://dasapurbasourav:1831511850@okcoll.ttli1.mongodb.net/usrlist?retryWrites=true&w=majority&appName=okcoll')
  .then(() => console.log('Connected!'));  

// const userlist =[
//     {
//         firstname:'apurba',
//         lastname:'diu',
//         email:'apurbadassourav@gmail.com',
//         phone:'01700946462',
//        password :'4596065'
//     }
// ]
app.get('/', (req, res) => {
  res.send('this is landing page')
})
app.get('/userlist', (req, res) => {
  res.send(userlist)
})
app.post('/userlist', (req, res) =>{
  const {firstname, lastname, email, phone, password} = req.body;
  res.send(req.body)
  
  const user = new UserSchema({
    firstname:firstname,
     lastname:lastname,
     email:email,
     phone:phone,
     password:password
  })
  user.save()


})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})