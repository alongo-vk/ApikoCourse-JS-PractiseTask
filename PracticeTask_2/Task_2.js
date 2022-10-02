const isEvenArray = (initialArray) => {
    const result = (initialArray.every(el => el % 2 == 0)) ? "YES" : "NO";
    return result;
}

op1 = isEvenArray([1, 2, 3, 9]);
op2 = isEvenArray([2, 4, 6]);

console.log(op1);
console.log(op2);