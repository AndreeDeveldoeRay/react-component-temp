/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-05T17:02:06+01:00
* @Email:  me@andreeray.se
* @Filename: WeatherAPI.jsx
* @Last modified by:   DevelDoe
* @Last modified time: 2017-03-05T17:22:51+01:00
*/

var axios = require('axios')

var units = 'metric',
    key = '48ba5cd6c56d934ef8fa607ba4339f45'

const URL = `http://api.openweathermap.org/data/2.5/weather?units=${units}&appid=${key}`

var WeatherAPI = {
    getTemperature: function (location) {
        var encodedLocation = encodeURIComponent(location)
        var requestUrl = `${URL}&q=${encodedLocation}`
        return axios.get(requestUrl).then(function (res) {
            return res.data.main.temp
        }, function (err) {
            return err.message
        })
    }
}
module.exports = WeatherAPI
