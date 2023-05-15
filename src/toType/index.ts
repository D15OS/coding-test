const toType = (value: any) => {
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}


console.log(toType(null), toType([]), toType(new Date()))