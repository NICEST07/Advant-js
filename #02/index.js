export default function listGifts(letter) {
    return letter.trim().split(' ').reduce((acc, item) => {
        if (item[0] === '_') return acc
        acc[item] = (acc[item] || 0) + 1
        return acc
    }, {})
}