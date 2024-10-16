const getCountry = (countryCode, callBack) => {
    const countryReq = new XMLHttpRequest()

    countryReq.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const countryArray = JSON.parse(e.target.responseText)
            countryArray.forEach((country) => {
                if (country.cca2 === countryCode) {
                    callBack(undefined, country.name.common)
                }
            })
        }
        else if (e.target.readyState === 4) {
            callBack('Unable to fetch data!', undefined)
        }
    })

    countryReq.open('GET', 'https://restcountries.com/v3.1/all')
    countryReq.send()
}