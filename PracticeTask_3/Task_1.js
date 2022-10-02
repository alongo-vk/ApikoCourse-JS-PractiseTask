//---------------------Global Scope---------------------
const var1 = "VAR1";

const outputVar1 = () => {
    console.log(var1);
}

outputVar1();  // змінна глобальна, тому видима для всіх функцій


//---------------------Function Scope---------------------
const outputVar2 = () => {
    const var2 = "VAR2";
    console.log(var2);
}

outputVar2();
console.log(outputVar2.var2);
//console.log(var2); // змінна var2 оголошена в тілі функції і видима тільки в межах фугкції outputVar2()


//---------------------Block Scope---------------------

const outputVar3 = () => {
    {
        const var3 = "VAR3";
        console.log(var3);
    }
    //console.log(var3);  //Змінна var3 оголошена в блоці{} і її зона видимості тільки в цьому блоці
}

    outputVar3();