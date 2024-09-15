const firstTime = new Date('September 22 2004 06:32:01')
const secondTime = new Date('August 02 2023 03:22:57')

const firstTimeTimestamp = firstTime.getTime()
const secondTimeTimestamp = secondTime.getTime()

console.log(firstTimeTimestamp)
console.log(secondTimeTimestamp)

if (secondTimeTimestamp > firstTimeTimestamp) {
    console.log(secondTime.toString())
} else {
    console.log(firstTime.toString())
}
