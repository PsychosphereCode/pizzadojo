function pizzaOven(tipoCorteza, tipoSalsa, queso, carnes){
    var pizza1={};
    pizza1.tipoCorteza= tipoCorteza;
    pizza1.tipoSalsa= tipoSalsa;
    pizza1.queso = queso;
    pizza1.carnes= carnes;
    return pizza1;
    
}

var pizzaChicago=pizzaOven("Chicago","Tradicional", ["Mozzarela"], ["pepperoni", "salchicha"]);
console.log(pizzaChicago);
var pizzaArtesanal =pizzaOven ("Lanzada a mano", "marinara", ["Mozzarela", "feta"], ["champinones", "aceitunas","cebollas"]);
console.log(pizzaArtesanal);

var pizzaFabian= pizzaOven("Masa Gruesa", "Salsa blanca", "Queso Gauda", "pollo teriyaki");
console.log(pizzaFabian);

var pizzaCristian=pizzaOven("Sin Masa","Salsa de carnes", "queso cottage", "Costillas de cerdo");
console.log(pizzaCristian);

// function pizzaRandom(tipoCorteza, tipoSalsa, queso, carnes){
//     var tipoCorteza= ["Corteza tradicional", "Corteza blanda", "Corteza delgada"]; OMITIR POR FAVOR.
//     var tipoSalsa= ["Tartara", "Salsa de tomate", "Salsa verde", "Salsa de ajo"];
//     var queso= ["Gauda", "cottage", "Queso azul", "Tres Quesos"];
//     var carnes=["Carne de cerdo","Carne de res", "Carne de pollo","Salchicha italiana"];
    

// }