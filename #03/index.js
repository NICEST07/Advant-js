function isValid(letter) {
    let coun = 0
    for (let i = 0; i < letter.length; i++) {
        if(letter[i] === '(' || letter[i] === ')') coun++
        if(letter[i] === '{' || letter[i] === '[') return false
        const sub = letter.substring(i, i+2)
        const start = letter.indexOf('(')
        const end = letter.indexOf(')')
        console.log({start, end});
        if(sub === '()' || end < start) return false
    }

    if(coun % 2 !== 0) return false

    return true
}

// console.log(isValid(')bici( casa play')); // -> expect: false receive: true
console.log(isValid('(()) bici'))
