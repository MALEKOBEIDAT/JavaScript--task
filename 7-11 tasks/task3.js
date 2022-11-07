const cars = ["Saab", "Volvo", "BMW","Eskaled"];

function Shorts(cars){
    var short=cars[0].length;
    var index=0;
for(i=0; i<cars.length;i++){
    if(cars[i].length<short){
        short=cars[i].length;
        index=i;

    }





}
document.write(cars[index]);

}

Shorts(cars);
