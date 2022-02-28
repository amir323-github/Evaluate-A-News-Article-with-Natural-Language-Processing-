 const dotenv = require('dotenv');
dotenv.config();

// console.log(`Your API key is ${process.env.API_KEY}`);
 


const  path = require('path')
const express = require('express')
// const mockAPIResponse = require('./mockAPI.js')
const  axios  = require('axios')
const cors =require('cors');

const app = express()



console.log(`Your API key is ${process.env.API_KEY}`);

app.use(cors());

 

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/URL', async function (req, res) {
    const {url}=req.query
    console.log(url)
    try {
        const result = await axios.get(
    `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${url}&lang=en`)
     const { agreement, subjectivity, confidence, irony } = result.data;
    res.send({agreement, subjectivity, confidence, irony });
    console.log(agreement, subjectivity, confidence, irony )
  } catch (error) {
    console.log("erro")
  }
    
})

/// You could call it aylienapi, or anything else
// var textapi = new aylien({
//     application_id: process.env.API_ID,
//     application_key: process.env.API_KEY
//  });