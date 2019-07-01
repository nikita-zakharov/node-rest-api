const express = require('express')

const path = require('path')

const app = express()

const postsRouter = require('./routes/posts')

const bodyParser = require('body-parser')

const port = process.env.PORT || 3000

app.set('view engine', 'html')

app.set('views', 'views')

app.disable('etag');

app.use(express.static(path.resolve(__dirname, 'public')))

app.use('/api', postsRouter)  

app.get('*', (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
  })


app.use(bodyParser.json())

app.listen(port)