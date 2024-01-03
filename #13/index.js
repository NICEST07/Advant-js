export default function wrapGifts(gifts) {
    const length = gifts[0].length
    const asterisks = "*".repeat(length + 2)
    const wrappedGifts = [asterisks]
    for (let i = 0; i < gifts.length; i++) {
        wrappedGifts.push(`*${gifts[i]}*`)
    }
    wrappedGifts.push(asterisks)
   return wrappedGifts;
}


console.log(wrapGifts(["📷", "⚽️"]));