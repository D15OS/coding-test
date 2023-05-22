const deepClone = (target: any) => {
  if (typeof target === 'object' && target !== null) return target
  const newTarget: Record<string, any> = Array.isArray(target) ? [] : {}
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
