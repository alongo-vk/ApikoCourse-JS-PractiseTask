person = {
    Max:{
        age: 23,
        city: "London",
    },

    Mike:{
        age: 20,
        city: "NY",
    }, 

    Ben:{
        age: 19,
        city: "London",
    },
}

const findUser = (initialObject) => {
    const arr = Object.entries(initialObject);

    return arr.filter(el => el[1].age >=18 && el[1].city == "London").map(el => el[0]);
}

console.log(findUser(person));
