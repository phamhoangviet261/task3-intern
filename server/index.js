const express = require('express')
const cors = require('cors')
const {jsonToGraph, generation, parseGeneration, parseGenerationByYOB} = require('./FTMS')


const app = express()
app.use(express.json())
app.use(cors())

// console.log(dataSample)

app.get('/', (req, res) => {
    return res.json({})
})

app.post('/check', (req, res) => {
    // console.log("body --------------------------------------------->", req.body.arrData)
    // console.log("end body --------------------------------------------->")
    // if(typeof req.body === 'object') return res.json({})
    const parseGenerationData = parseGeneration(req.body.arrData)
    return res.json({jsonToGraph, generation, parseGenerationData})
})

app.post('/yob', (req, res) => {
    console.log("-------------------------------------;")
    console.log(req.body)
    console.log("-------------------------------------;")
    const yob = req.body.yob
    res.json({data: parseGenerationByYOB(yob)})
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})