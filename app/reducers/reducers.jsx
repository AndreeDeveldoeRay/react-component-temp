/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-05T17:38:33+01:00
* @Email:  me@andreeray.se
* @Filename: reducers.jsx
* @Last modified by:   DevelDoe
* @Last modified time: 2017-03-05T17:43:35+01:00
*/



export var tempReducer = (state = {isFetching: false, temp: undefined, location: undefined, errorMessage: undefined}, action) =>
{
    switch (action.type)
    {
        case 'START_TEMP_FETCH':
            return {
                isFetching: true,
                temp: undefined,
                location: undefined,
                errorMessage: undefined
            }
        case 'COMPLETE_TEMP_FETCH':
            return {
                isFetching: false,
                temp: action.temp,
                location: action.location,
                errorMessage: action.errorMessage
            }
        default:
            return state
    }
}
