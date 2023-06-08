 import express from 'express'
import path from 'path'
import {requestTime,logger} from'./middleweares.js'

const __dirname = path.resolve()
 const app = express ()
app.use(express.static(path.resolve(__dirname,'static')))
app.use(requestTime)

app.get('/', (req, res) => {
res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
})

// app.get('/features', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'static', 'features.html'))
//     })

    app.get('/download', (req, res) => {
        console.log(req.requestTime)
        res.download(path.resolve(__dirname, 'static', 'index.html'))
        })
 app.listen(3000, () => {
  console.log('Server has been started on port 3000')
 })