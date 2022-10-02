const Person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
};

const testArgs = ['sushi', 'hiking']

const logPersonNameAndInterests = (_this, interests) => {
    let fullInfo = _this.getFullName() + ' loves ' + interests.join(', ');
    console.log(fullInfo);
}

logPersonNameAndInterests(Person, testArgs); //without call


/*function logPersonNameAndInterests(interests) {
    let fullInfo = this.getFullName() + ' loves ' + interests.join(', ');
    console.log(fullInfo);
}
logPersonNameAndInterests.call(Person, testArgs);*/ // with call