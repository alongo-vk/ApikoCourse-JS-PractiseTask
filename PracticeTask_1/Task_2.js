
function calculateSumOfArray() {
    const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
    let sumOfArray = 0;
    for (let i of initialArray) {
        (typeof i == "number") ? sumOfArray += i : ""
    }
    console.log(sumOfArray);
}

calculateSumOfArray();  