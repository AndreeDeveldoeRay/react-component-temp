/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-05T16:57:23+01:00
* @Email:  me@andreeray.se
* @Filename: LocationAPI.jsx
* @Last modified by:   DevelDoe
* @Last modified time: 2017-03-05T17:22:00+01:00
*/

var axios = require('axios')

const URL = 'http://ipinfo.io'

var LocationAPI ={
    getLocation: function (){
        return axios.get(URL).then(function (res) {
            return `${res.data.city}, ${res.data.country}`
        }, function (err) {
            throw new Error(err.message)
        })
    }
}
module.exports = LocationAPI
