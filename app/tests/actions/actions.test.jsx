/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-12T16:38:03+01:00
* @Email:  me@andreeray.se
* @Filename: actions.test.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-12T16:46:05+01:00
*/



var expect = require('expect'),
    actions = require('actions')

describe('Actions: ', () => {

    it('startTempFetch', () => {

        var action = {
            type: 'START_TEMP_FETCH'
        }
        var res = actions.startTempFetch()
        expect(res).toEqual(action)

    })

    it('completeTempFetch', () => {

        var action = {
            type: 'COMPLETE_TEMP_FETCH',
            temp: 20,
            location: 'loc'
        }

        var res = actions.completeTempFetch(action.temp,action.location)
        expect(res.temp).toEqual(action.temp)
        expect(res.location).toEqual(action.location)

    })

})
