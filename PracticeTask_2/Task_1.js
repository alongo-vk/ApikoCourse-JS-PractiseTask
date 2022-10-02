const unicFn = (initialArray) => {
    const unicArray = initialArray.filter((el, i, arr) => arr.indexOf(el) === i)
    return unicArray;
}

console.log(unicFn([2, 3, 1, 3, 3, 7]));