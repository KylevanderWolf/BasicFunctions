const makePizza = () => {
    console.log("make the pizza dough")
    console.log("preparing the toppings")
    console.log("bake the pizza")
}

const makeSushi = () => {
    console.log("make the rice")
    console.log("season the rice")
    console.log("prepare the preps")
    console.log("wrap it up")
    console.log("slice and serve it")
}


//Sushi
const sushiCount = 3
for (i = 0; i < sushiCount; i++) {
    makeSushi(i)
}

//Pizza
const pizzaCount = 2
for (i = 0; i < pizzaCount; i++) {
    makePizza(i)
}

