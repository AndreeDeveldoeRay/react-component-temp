/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-05T17:38:15+01:00
* @Email:  me@andreeray.se
* @Filename: actions.jsx
* @Last modified by:   DevelDoe
* @Last modified time: 2017-03-05T17:59:49+01:00
*/

var LocationAPI = require('LocationAPI'), WeatherAPI = require('WeatherAPI')

export var startTempFetch = () =>
{
    return {
        type: 'START_TEMP_FETCH'
    }
}
export var completeTempFetch = (temp, location) =>
{
    return {
        type: 'COMPLETE_TEMP_FETCH',
        temp,
        location
    }
}
export var fetchTemp = () =>
{
    return (dispatch, getState) =>
    {
        dispatch(startTempFetch())
        LocationAPI.getLocation().then(function(location){
            WeatherAPI.getTemperature(location).then(function (temp) {
                dispatch(completeTempFetch(temp,location))
            })
        })
    }
}
