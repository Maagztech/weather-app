const request = require('request')

const forecast = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1dda044300e1fa1762684cb418e5f341&query='+address
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,  ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.',body.location.region+','+body.location.country)
        }
    })
}

module.exports = forecast