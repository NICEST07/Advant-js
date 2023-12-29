function createXmasTree(height) {
    const space = '_'
    const base = space.repeat(height - 1) + '#' + space.repeat(height - 1);
    const tree = Array(height).fill('').map((_, i) => {
        const spaces = space.repeat(height - i - 1)
        const stars = '*'.repeat(i * 2 + 1)
        return spaces + stars + spaces
    });

    return tree.join('\n') + '\n' + base + '\n' + base;
}



console.log(createXmasTree(4));