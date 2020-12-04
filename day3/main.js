const fs = require('fs')
const { getMaxListeners } = require('process')
const input = fs.readFileSync('./input.txt', 'utf-8')
const lines = input.replace(/(?:\r\n|\r|\n)/g, '\n').split('\n')
const treeMap = lines.map(x => x.split(''));

function run() {
    let result1 = part1()
    let result2 = part2()
    console.log(`part1: ${result1}\npart2: ${result2}`)
}

function findTrees(xUnits, yUnits) {
    let numberOfTrees = 0
    let x = 0;
    let y = 0;
    while (y < treeMap.length) {
        const adjustedX = x % treeMap[0].length;
        const coordinate = treeMap[y][adjustedX];
        if (coordinate === `#`) numberOfTrees++;
        x += xUnits;
        y += yUnits;
    }

    return numberOfTrees;
}

function part1() {
    return findTrees(3, 1)
}

function part2() {
    let scopes = [
        [1, 1], [3, 1], [5, 1], [7, 1], [1, 2]
    ]
    let result = 1
    for (let i = 0; i < scopes.length; i++) {
        result *= findTrees(scopes[i][0], scopes[i][1])
    }
    return result
}

run()
