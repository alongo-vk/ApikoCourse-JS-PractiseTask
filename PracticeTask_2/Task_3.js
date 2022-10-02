const filterArray = (initialArray) => {
    return initialArray.filter(el => typeof el == "string");
}

filteredArray = filterArray([2, "string", 3, , , "test"]);
console.log(filteredArray);
