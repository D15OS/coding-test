const unique = (array: any[]) => {
    return array.filter((value, index) => array.indexOf(value) === index)
}

console.log(unique([1, 2, 3, 3, 4, 4, 5, 5]))