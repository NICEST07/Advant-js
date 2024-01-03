export default function groupBy(collection, it) {
    const result = collection.reduce((acc, curr) => {
        const key = typeof it === 'function' ? it(curr) : curr[it];
        acc[key] = [...(acc[key] || []), curr];
        return acc;
    }, {});
    return result;
}




// console.log(groupBy([6.1, 4.2, 6.3], Math.floor)); // -> { 6: [6.1, 6.3], 4: [4.2] }
console.log(groupBy([{ age: 23 }, { age: 24 }], 'age')); // -> { 23: [{ age: 23 }], 24: [{ age: 24 }] }
// console.log(groupBy(
//     [1397639141184, 1363223700000],
//     timestamp => new Date(timestamp).getFullYear()
// ));

// console.log(groupBy([
//     { title: 'JavaScript: The Good Parts', rating: 8 },
//     { title: 'Aprendiendo Git', rating: 10 },
//     { title: 'Clean Code', rating: 9 },
// ], 'rating'));

// console.log(groupBy(['one', 'two', 'three'], 'length'))// { 3: ['one', 'two'], 5: ['three'] };