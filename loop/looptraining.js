 ///////////////////// Create an array with 10 elements. Using the comands 'while' and 'for' list these elements on browser's console. 



// var colors = ["pink", "blue" , "yellow" , "black" , "red" , "purple" , "green" , "orange" , "white" , "grey" ];

// var index = 0;

//  while (index < colors.length) {
//     console.log("Position " + colors[index] + " is " + index);
//     index++;
// } 


//  for (var index = 0; index < colors.length; index++) {
//     console.log("Position " + colors[index] + " is " + index);
// } 


//  for (index in colors) {
//     console.log("Position " + colors[index] + " is " + index);
// } 



//  for (index of colors) {
    
//     console.log("The color is " + index);
    
// } 

/////////////////// Criar um sistema onde o índece do array é multiplicado por 5.

// var numbers = [1,5,9,2,6];

// function multiplier(n){
//     return (n * 5);
// }

//   // console.log(multiplier(numbers[1]));


// for (index in numbers) {
//     console.log("Resultado de " + numbers[index] + " * 5 é = " + multiplier(numbers[index]));
// }
 



///////////////////// Criar um sistema que transforme a temperatura de Celsius para Fahrenheit. Caso estiver entre 32ºF e 59ºF o clima é considerado frio, se estiver entre 60,8ºF e 77ºF o clima é ameno e se for maior que isso considera-se quente.  


 var temperatureConverter = function(t){
        return (t * 1.8 + 32);
}

var climate = function(f){

    if (f >= 32 && f <= 59) {
         return " O clima está Frio";

     } else if (f >= 60.8 && f <= 77 ) {
        return " O clima está Ameno";

    } else {
        return " O clima está Quente";
    }
} 

var celcius = [10.6,27.4,22.0,2.1,33.8,24.1];

 
for (var i in celcius) {
    
    console.log(celcius[i] + "ºC >>> " + temperatureConverter(celcius[i])+"ºF" + climate(temperatureConverter(celcius[i])));

}




