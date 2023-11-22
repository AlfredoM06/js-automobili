// Esercizio, creare un array composto da 10 automobili. Ogni oggetto avra
// come proprietà le seguenti: Marca, Modello e Alimentazione(benzian,diesel
// elettrica, ibrida e gpl).
// dividi le automobili in 3 array separati, 1 per quelle a benzina, 1 per 
// diesel e 1 per le altre, in fine stampa i 3 array separatamente.

// inizio esercizio, creo un array di oggetti con 10 auto

let carList = [
    {
        brand: "Alfa Romeo",
        model: "Tonale",
        fuel: "Ibrida"
    },
    {
        brand: "Audi",
        model: "RS 5 SPB",
        fuel: "Benzina"
    },
    {
        brand: "BMW",
        model: "Serie 1",
        fuel: "Diesel"
    },
    {
        brand: "Mercedes-Benz",
        model: "Classe A 5p",
        fuel: "Diesel"
    },
    {
        brand: "Ferrari",
        model: "Stradale",
        fuel: "Benzina"
    },
    {
        brand: "Ford",
        model: "Fiesta",
        fuel: "GPL"
    },
    {
        brand: "Lamborghini",
        model: "Aventador",
        fuel: "Benzina"
    },
    {
        brand: "Maserati",
        model: "Ghibli",
        fuel: "Diesel"
    },
    {
        brand: "Mazda",
        model: "Mazda 3",
        fuel: "Idrida"
    },
    {
        brand: "Tesla",
        model: "Model s",
        fuel: "Elettrica"
    }
];


// creo 3 array separati per ogni tipo di carburante delle macchine
let carListGasoline = [];
let carListDiesel = [];
let carListEcologic = [];


// faccio si che le macchine vengono divise nell'array giusto

carList.forEach(function(car) {
    if (car.fuel == "Benzina") {
        carListGasoline.push(car);
    } else if (car.fuel == "Diesel") {
        carListDiesel.push(car);
    } else {
        carListEcologic.push(car);
    }

});


//stampo i 3 array nella console 
console.log(carListGasoline);
console.log(carListDiesel);
console.log(carListEcologic);