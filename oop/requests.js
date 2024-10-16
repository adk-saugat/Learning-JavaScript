const getCountry = (countryCode) => new Promise((resolve, reject) => {
    const countryReq = new XMLHttpRequest()

    countryReq.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const countryArray = JSON.parse(e.target.responseText)
            countryArray.forEach((country) => {
                if (country.cca2 === countryCode) {
                    resolve(country.name.common)
                }
            })
        }
        else if (e.target.readyState === 4) {
            reject('Unable to fetch data!')
        }
    })

    countryReq.open('GET', 'https://restcountries.com/v3.1/all')
    countryReq.send()
})