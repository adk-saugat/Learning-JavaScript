const countryCode = 'NP'

getCountry(countryCode, (error, countryName) => {
    if (error) {
        console.log(error)
    } else {
        console.log(countryName)
    }
})



