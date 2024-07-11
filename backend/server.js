const express = require('express')
const dbConnect = require('./config/dbConnect.js')
const dotenv=require('dotenv')
const app = express()
app.use(express.json())
const path = require('path')
const userRoute = require('./routes/userRoutes.js')
const transactionsRoute = require('./routes/transactionRoutes.js')
app.use('/api/users/' , userRoute)
app.use('/api/transactions/' , transactionsRoute)

dotenv.config({path:'backend/config/config.env'});

const port =process.env.PORT || 5000

if(process.env.NODE_ENV === 'production')
{
     app.use('/' , express.static('client/build'))

     app.get('*' , (req, res)=>{
         res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
     })
}



app.listen(port, () => console.log(`Node JS Server started at port ${port}!`))