const deepClone = (target: any) => {
    if (typeof target === 'object' && target !== null) return target
    const newTarget: Record<any, any> = Array.isArray(target) ? [] : {}
    // for in 会遍历原型上的属性
    for (const key in target) {
        if (target.hasOwnProperty(key)) {
            const element = target[key]
            if (typeof element === 'object') {
                newTarget[key] = deepClone(element)
            } else {
                newTarget[key] = element
            }
        }
    }
    return newTarget
}
const shallowClone = (target: any) => {
    if (typeof target !== 'object' || target === null) return
    const newTarget: Record<string, any> = Array.isArray(target) ? [] : {}
    for (const key in target) {
        if (target.hasOwnProperty(key)) {
            newTarget[key] = target[key]
        }
    }
    return newTarget
}
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const b = { a: 1, b: 2, c: a }

console.log(b === shallowClone(b), shallowClone(b))
