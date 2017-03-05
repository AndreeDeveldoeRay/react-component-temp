/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-05T17:39:02+01:00
* @Email:  me@andreeray.se
* @Filename: storeConfig.jsx
* @Last modified by:   DevelDoe
* @Last modified time: 2017-03-05T17:50:07+01:00
*/

var redux = require('redux'), thunk = require('redux-thunk').default, {tempReducer} = require('./../reducers/reducers.jsx')

export var config = () => {
    var reducer = redux.combineReducers(
    {
        temp : tempReducer
    })

    var store = redux.createStore(reducer, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ))

    return store
}
