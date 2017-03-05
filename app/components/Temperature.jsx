/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-05T17:07:53+01:00
* @Email:  me@andreeray.se
* @Filename: Temperature.jsx
* @Last modified by:   DevelDoe
* @Last modified time: 2017-03-05T18:00:45+01:00
*/



var React = require('react'), actions = require('actions'), store = require('storeConfig').config()


var Temperature = React.createClass({
    getInitialState: function () {
        return {
            isFetching: false
        }
    },
    componentDidMount: function () {
        var that = this
        var unsubscribe = store.subscribe(() => {
            var state = store.getState()
            if (state.temp.isFetching) document.getElementById('app').innerHTML = "loading..."
            else if (state.temp.temp) document.getElementById('app').innerHTML = state.temp.temp + " in " + state.temp.location
        })
        store.dispatch(actions.fetchTemp())
    },
    render: function () {
        return (<div></div>)
    }
})
module.exports = Temperature
