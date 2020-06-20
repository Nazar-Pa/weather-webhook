const express = require('express');
const app = express.Router();
const axios = require('axios');




// app.get('/', async (req, res) => {

//     try {
//         await axios.get('https://api.nutritionix.com/v1_1/search/apple?results=0:2&fields=nf_calories&appId=45d558a8&appKey=283a05f63e61bb5c305979fdfca57b28')
//             .then(response => {
//                 const temp = response.data.hits[0];
//                 const string = temp.fields.nf_calories;
//                 console.log(string);
//                 res.send(string.toString());
//             })
//             .catch((err) => console.log(err))
//     }
//     catch {
//         res.send('error');
//     }
// });

//ishleyen budu
app.post('/', async (req, res) => {

    try {
        await axios.get('http://api.openweathermap.org/data/2.5/weather?q=berlin&appid=32dca906805ec17b4583f7028c673b88')
            .then(response => {
                const temp = response.data.main.temp;
                console.log(temp);
                const responseObj = {
                    "fulfillmentText": temp
                }
                return res.json(responseObj);
                res.sendStatus(temp);
            })
            .catch((err) => console.log(err))
    }
    catch {
        res.send('error');
    }
});


// bu da ishdiyir
// app.post('/', (req, res) => {
//     return axios.get('http://api.openweathermap.org/data/2.5/weather?q=london&appid=32dca906805ec17b4583f7028c673b88')
//         .then(response => {
//             const temp = response.data.main.temp;
//             console.log(temp);
//             res.sendStatus(temp);
//         })
//         .catch((err) => console.log(err))


// });

module.exports = app;

//https://api.nutritionix.com/v1_1/search/apple?results=0%3A20&cal_min=0&cal_max=50000&fields=*&appId=45d558a8&appKey=283a05f63e61bb5c305979fdfca57b28

// const city = agent.parameters.city;
// return axios.get('http://api.openweathermap.org/data/2.5/weather?q=berlin&appid=32dca906805ec17b4583f7028c673b88')
//     .then(response => {
//         const temp = response.data.main.temp;
//         console.log(temp);
//         agent.add(temp);
//     });


// function getWeather(agent) {
//     const city = agent.parameters.city;
//     return axios.get('http://api.openweathermap.org/data/2.5/weather?q=berlin&appid=32dca906805ec17b4583f7028c673b88')
//         .then((response) => {
//             const temp = response.data.main.temp;
//             agent.add(temp);

//         });

