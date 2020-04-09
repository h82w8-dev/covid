const axios = require('axios');
let services = {};

services.getByCountry = (country)=>{
    return axios({
    "method":"GET",
    "url":"https://covid-193.p.rapidapi.com/statistics",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"covid-193.p.rapidapi.com",
    "x-rapidapi-key":"2387365a41msh1771565fdb37caap1e72b0jsnf2bf37d53c7e"
    },"params":{
    "country": country
    }
    });
}

module.exports = services;