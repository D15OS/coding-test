const flat = <T>(arr: T[]): T[] => {
    let result: T[] = []
    arr.forEach(element => {
        if (Array.isArray(element)) {
            result = result.concat(flat(element))
        } else {
            result.push(element)
        }
    })
    return result
}

console.log(flat([1, [1, 2, 3, [4, 5, 6]], [2, 5, 6, [3, 8, 9]]]))