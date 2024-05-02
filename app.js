// console.log(nested-object);

const car = {
    name: "Tata Naxon" ,
    model: 2022 ,
    color: "Black" ,
    weight: "800 kg" ,

    cost: {
        carCost : 1000000 ,
        Taxes: 20000 ,

        accessories: {
            Wheels : 10000 ,
            seatCover : 5000 ,
            speaker : 3000
        }
    
    } ,

    

}

car.cost.accessories.seatCover = 8000; 
delete  car.cost.accessories.Wheels;
car.cost.accessories.sideGlasses = 1000 ;



console.log(car);
console.log(car.cost);
console.log(car.cost.Taxes);
console.log(car.cost.accessories);


























