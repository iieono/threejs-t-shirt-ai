import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'

import dalleRoutes from './routes/dalle.routes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json({limit : '50mb'}))
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use('/api/v1/dalle', dalleRoutes)

app.get('/', (req, res)=>{
    res.status(200).json({message: "hello"})
})

app.listen(8080, ()=>{
    console.log('Server has started on port 8080')
})