const versions = ['2.1.0.1', '0.402.1', '10.2.1', '5.1.2', '1.0.4.5']

versions.sort((a, b) => {
    // format to array
    const formatA = a.split('.').map(Number)
    const formatB = b.split('.').map(Number)
    // bit by bit compare
    for (let i = 0; i < Math.max(formatA.length, formatB.length); i++) {
        const A = formatA[i] || 0
        const B = formatB[i] || 0
        return A - B
    }
    return 0
})

console.log(versions);
