export default function shouldBuyFidelity(times) {
    const price = 12
    const fidelity = 250
    const fidelityDiscount = 0.75
    const totalNormal = price * times
    let totalFidelity = fidelity + (price * fidelityDiscount * (1 - Math.pow(fidelityDiscount, times - 1)) / (1 - fidelityDiscount)) 
    return totalFidelity < totalNormal
}

console.log(shouldBuyFidelity(100));