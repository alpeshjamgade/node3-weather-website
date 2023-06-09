console.log('Client side js file is loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const weatherIcon = document.querySelector('#weather-icon')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    weatherIcon.setAttribute("src", '')
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                weatherIcon.setAttribute("src", '')
                messageOne.textContent = ''
                messageTwo.textContent = data.error
            } else {
                messageOne.textContent = `${data.location}`
                messageTwo.textContent = `${data.forecast}`
                weatherIcon.setAttribute("src", data.weatherIcon)
            }
        })
    })

})