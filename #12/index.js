export default function getMinJump(obstacles) {
    for (let i = 1; i <= Math.max(...obstacles); i++) {
        for (let j = i; j <= Math.max(...obstacles); j+=i) {
            if (obstacles.includes(j)) break
            if (!obstacles.includes(j) && j + i > Math.max(...obstacles)) {
                return i
            }
        }
    }
}

const obstacles = [5, 3, 6, 7, 9]
console.log(getMinJump(obstacles)); // -> 7