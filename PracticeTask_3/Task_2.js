const car = {
    name: "Tesla",
    model: "X",
    showCarInfo
};

function showCarInfo() {
    console.log(`${this.name} Model ${this.model}`);
}

output = showCarInfo.bind(car);
output();