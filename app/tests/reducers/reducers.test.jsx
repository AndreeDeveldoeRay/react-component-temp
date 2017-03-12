/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-12T16:46:51+01:00
* @Email:  me@andreeray.se
* @Filename: reducers.test.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-12T16:56:04+01:00
*/



var expect = require('expect'),
    reducers = require('reducers'),
    deepfreeze = require('deep-freeze')

describe('Reducers: ', () => {

    describe('tempReducer', () => {

        it('START_TEMP_FETCH', () => {

            var action = {
                type: 'START_TEMP_FETCH',
            }

            var res = reducers.tempReducer(deepfreeze(false,undefined,undefined,undefined),deepfreeze(action))
            expect(res.isFetching).toEqual(true)
            expect(res.temp).toEqual(undefined)
            expect(res.location).toEqual(undefined)
            expect(res.errorMessage).toEqual(undefined)

        })

        it('COMPLETE_TEMP_FETCH', () => {

            var action = {
                type: 'COMPLETE_TEMP_FETCH',
                temp: 20,
                location: 'loc',
                errorMessage: 'error'
            }
            var res = reducers.tempReducer(deepfreeze(false,undefined,undefined,undefined),deepfreeze(action))
            expect(res.isFetching).toEqual(false)
            expect(res.temp).toEqual(action.temp)
            expect(res.location).toEqual(action.location)
            expect(res.errorMessage).toEqual(action.errorMessage)

        })

    })

})
