const getPromiseData = (info) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(info)
        //reject('Didnot work!')
    }, 1000)
})

const mypromise = getPromiseData(10)

mypromise.then((data) => {
    console.log(data)
}, (error) => {
    console.log(error)
})