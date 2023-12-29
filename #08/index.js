export default function maxProfit(prices) {
    for (let i = 0; i < prices.length; i++) {
        const price = prices[i]
        const nextPrice = prices[i + 1]
        if (price < nextPrice) {
            const maxVenta = Math.max(...prices.slice(i + 1))
            return maxVenta - price
        }
    }

    return -1
}

// const pricesBtc = [39, 18, 29, 25, 34, 32, 5] -> 16 (compra a 18, vende a 34)
const pricesEth = [10, 20, 30, 40, 50, 60, 70] // -> 60 (compra a 10, vende a 70)
const pricesDoge = [18, 15, 12, 11, 9, 7] // -> -1 (no se puede comprar)
const pricesAda = [3, 3, 3, 3, 3] // -> -1 (no se puede comprar)
console.log(maxProfit(pricesAda)); 