export default function daysToXmas(date) {
    const dateEnd = new Date('Dec 25, 2021')
    return Math.ceil((dateEnd - date) / (1000 * 60 * 60 * 24))
}

const date1 = new Date('Dec 26, 2021')
console.log(daysToXmas(date1)); // 24