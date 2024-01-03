
const lol = {
    "1": 0,  
    "2": 1,
    "5": 2,
    "10": 3, 
    "20": 4,
    "50": 5 
}

const coins = [1, 2, 5, 10, 20, 50];


export default function getCoins(change) {
    const coins = [1, 2, 5, 10, 20, 50]
    const result = [0, 0, 0, 0, 0, 0]
    let i = coins.length - 1;
    while (change > 0) {
        if(change >= coins[i]){
            change -= coins[i]
            result[i]++
        }else {
            i--
        }
    }
    return result
}

console.log(getCoins(100));