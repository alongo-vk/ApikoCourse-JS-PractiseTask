const arr = ['CusTom', 'Web', 'aNd', 'MoBile', 'PlaTfoRms'];;

const compose = (...fnx) => (x) => fnx.reduceRight((v , f) => f(v), x)
 
const modifyArray = space => initarr => {
    let newArr = initarr.map(el => el.toLowerCase());

    finalString = space == '-' ? 
    newArr.map(el => el[0].toUpperCase() + el.substring(1)).join(space) : 
    newArr.join(space);
    
    return `Result: ${finalString} length: ${finalString.length}`;
};

const capitalizeAllFirst = compose (console.log, modifyArray('-'));
const allToLower = compose (console.log, modifyArray(' - '));

capitalizeAllFirst(arr);
allToLower(arr);


// const arr = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];
 
// const compose = (...fnx) => (x) => fnx.reduceRight((v , f) => f(v), x)   
 
// const modifyArray = (initarr) => initarr.map(el => el.toLowerCase());

// const arrToString = space =>  initarr => initarr.join(space);

// const makeFirstCapital = (initarr) => initarr.map(el => el[0].toUpperCase() + el.substring(1));

// const output = (str) => `Result: ${str} length: ${str.length}`;

// const capitalizeAllFirst = compose (console.log, output, arrToString('-'), makeFirstCapital, modifyArray);

// const allToLower = compose (console.log, output, arrToString(' - '), modifyArray);

// capitalizeAllFirst(arr);
// allToLower(arr);