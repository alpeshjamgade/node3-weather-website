const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = `http://api.weatherstack.com/current?access_key=c796bb4b21931b0c8f9129e5b3d19672&query=${latitude},${longitude}`

    request({ url, json: true }, (error, { body, responseError }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (responseError) {
            callback('Unable to find location', undefined)
        }
        else {
            callback(undefined, {
                forecastData: `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees. Feels like ${body.current.feelslike}. These is a ${body.current.precip}% chance of rain. UV index is ${body.current.uv_index}. Wind speed is ${body.current.wind_speed} and wind direction is ${body.current.wind_degree} degress to ${body.current.wind_dir}. Pressure is ${body.current.pressure} Pa. Cloud cover is ${body.current.cloudcover}%`,
                weatherIcon: body.current.weather_icons[0]
            })
        }
    })
}

module.exports = forecast