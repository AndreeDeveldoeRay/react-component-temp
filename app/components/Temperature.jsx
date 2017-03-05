/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-05T17:07:53+01:00
* @Email:  me@andreeray.se
* @Filename: Temperature.jsx
* @Last modified by:   DevelDoe
* @Last modified time: 2017-03-05T17:23:10+01:00
*/



var React = require('react'), WeatherAPI = require('WeatherAPI'), LocationAPI = require('LocationAPI')

var Temperature = React.createClass({
    getInitialState: function () {
        return {
            isFetching: false
        }
    },
    componentDidMount: function () {
        var that = this
        LocationAPI.getLocation().then(function(location){
            WeatherAPI.getTemperature(location).then(function (temperature) {
                that.setState({
                    location: location,
                    temperature: temperature,
                    isFetching: false
                })
            }, function (e) {
                that.setState({
                    isFetching: false,
                    errorMessage: e.message
                })
            })
        }, function (e) {
            that.setState({
                isFetching: false,
                errorMessage: e.message
            })
        })
    },
    render: function () {
        var {isFetching,temperature,location,errorMessage} = this.state
        function renderMessage () {
            if (isFetching) return <span>isFetching...</span>
            else if (temperature && location) return <span>{temperature} in {location}</span>
            else if (typeof errorMessage === 'string') <span>{errorMessage}</span>
        }
        return <div>{renderMessage()}</div>
    }
})
module.exports = Temperature
