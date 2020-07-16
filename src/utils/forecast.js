const request = require('request')

const forecast = (latitude,longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=78baa86e9dc603f27b4bc428001d4b61&query=' + latitude + ',' + longitude + '&units=f'
    request({url, json: true},(error,{body}) => {
        if (error){
            callback('Unable to connect to weather services',undefined)
        } else if (body.error){
            callback('unable to find location',undefined)
        } else {
            callback(undefined,body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.' + 'Humidity is ' + body.current.humidity)
        }
    })
}

module.exports = forecast