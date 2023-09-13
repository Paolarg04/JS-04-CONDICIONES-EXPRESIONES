console.log("Estoy vivoooo")



/*
Operador

Un elemento que nos permite realizar una operacion entre dos o mas elementos.


- Operadores aritmeticos (+, -. *, /)
- Operadores de signacion (=, / asignacion)
- Operadores de cadenas (tolowerCase, toUpperCase, trin, toString, concat)
- Operadores de comparacion (<,>, <=, >=, ==, ===)



*/

/*Operadores aritmeticos


Son operadores que nos permiten tomar valores numericos como sus operadores y retornar un valor numero unico. Corresponden a operaciones matematicas.


  Suma (+)
  Resta (-)
  Multiplicacion (*)
  Division (/)
  Residuo / Modulo (%)
  Exponenciacion (**)
  Incremento (++)
  Decremento (--)


*/

//Variables
let numero1 = 10;
let numero2 = 2;
let numero3 = "5";

//Operaciones
suma = numero1 + numero2; // 12
resta = numero1 - numero2; // 8
multiplicacion = numero1 * numero2;
division = numero1 / numero2;
residuo = numero1 % numero2;
exponenciacion = 10 ** 2; // es obsoleto porque ya hay un metodo para esto


//Impresion del valor con incremento
console.log("Valor del numero 1 antes del incremento: ", numero1);

// NOTA: Cuando usamos incrementos el valor se reasigna  (suma y reasigna)
// Los valores si se pueden resignar
incremento = numero1++; // 11
decremento = numero2--; // 1


//Forma extensa
numero1 = numero1 + 1;

console.log("Valor del numero 1 despues del incremento: ", numero1);

//Incremento de 10 en 10
numero1 += 18; //28 suma y reasigna al mismo tiempo
numero1 = 10 + 10;



//Ejemplo
//2{5*6(4) + [3-(5-76)]};
//operacionescomplejas = 10 + 5 / 2 (5 - 6);




//Impresiones en pantalla
console.log("Suma de 10 + 2 ", suma); //1 forma de mostrar la forma
console.log("Suma de 10 + 2 ", numero1 + numero2); // Segunda forma
console.log("Suma de 10 + 2 ", 10 + 2); // tercera forma 
console.log("Resta de 10 - 2 ", resta);





/*
Operadores de comparacion 

Operadores que nos permiten comparar dos datos, y al hacerlo obtendremos un valor booleano (true o false)

  - mayor que (>)
  - menos que (<)
  - mayor o igual que (>=)
  - menor o igual que (<=)
  - igual (==)
  - estrictamente igual (===)
  - no es igual (!=)
  - no es estrictamente igual (!==)


Igual (==)

Sirve para comparar que dos valores son iguales


*/


let numeroComparacion1 = 23;
let numeroComparacion2 = 13;
let numeroComparacion3 = 13;
let numeroComparacion4 = "13";

// 33 == "13" //true
// 33 == "13" //false
// 23 > 12 true
// 23 < 12 false

if (edadFelipe > 18){
  console.log("Puedes ir a la pachanga");
} else {
  console.log("Te quedas en casa");
}



//Dos negaciones es una afirmacion
//!vamos a comer (no vamos a comer)
//!no me gusta Java (no no me gusta Java) (no * no = si)




/*

Operadores de asignacion

Son los operadores que utilizan para asignar un valor a una variable. Se usa el operador.

let edad = 31;
let saldo = 0;

 */




/* Operadores logicos

Nos devuelven un resultado a partir de que se cumpla (o no) una condicion, el resultado es booleano (true o false).


    - AND &&: Sirve para determinar si dos expresiones son verdaderas. Si ambas son verdaderas, el resultado es verdadero. Si alguno de ellos es falso, todo el resultado es falso. Si ambos son falsos, todo es falso.


*/


let tengoUnCrush = true;
let miCrushMeQuiere = true;

if (tengoUnCrush && miCrushMeQuiere){
  console.log("Estoy feliz");
}else{
  console.log("Haganse a un lado que me quiero automorir");
}


/*

    - OR ||: Sirve para determinar si dos funciones son falsas. Si cualquiera de las dos afirmaciones es verdadera, todo es verdadero. Si las dos son falsas, todo el falso.

*/

//Ejemplo ||
let hayChilaquilesVerdes = false;
let hayCarneEnSuJugo = false;

if (hayChilaquilesVerdes || hayCarneEnSuJugo){
  console.log("Felipe desayuna chido");
}else{
  console.log("Felipe no desayuna chido");
}


/*

NOT (!): Regresa lo contrario de lo que evaluamos

*/


//Ejemplo !

let esMayorDeEdad = true;  // Felipe es mayor de edad
let tieneSaldoCelular = false;  // Felipe no tiene saldo en su celular

// Verificamos si Felipe NO es mayor de edad O NO tiene saldo en su celular
if (!esMayorDeEdad || !tieneSaldoCelular) {
    console.log("Felipe no puede ir a la fiesta.");
} else {
    console.log("Felipe puede ir a la fiesta.");
}














///////////////////////////////////////////
//Suma (+): Se utiliza para sumar dos numeros.
//let resultado = 5 + 3; // resultado contendra el valor 8
//Resta (-): Se utiliza para restar un numero de otro.
//let resultado1 = 10 - 4; // resultado contendra el valor 6

//Multiplicacion (*): se utiliza para multiplicar dos numeros.

//let resultado2 = 6 + 3; // resultado contendra el valor 18

//Division (/): Se utiliza para dividir un numero por otro. La division por cero produce un valor especial llamado "Infinity" (infinito).

//let resultado3 = 15 / 3; // resultado contendra el valor 5

//Modulo (%): Se utiliza para obtener el resto de una division entre dos numeros.

//let resultado4 = 10 % 3; // resultado contendra el valor 1 (el resto de 10 dividido por 3) //Incremento (++): Se utiliza para aumentar en 1 el valor de una variable.

//let numero = 5;
//numero ++;
//ahora numero contendra el valor 6
//Decremento (--): Se utiliza para diminuir en 1 el valor de una variable.+
//let numero1 = 8;
//numero ==; // ahora numero contendra el valor 7

//Doble igual - igualdad Abstracta
//5 == "5" // true, ya que JavaScript convierte la cadena "5" a un numero antes de la comparacion.

// Triple igual - Igualdad estricta
//5 === "5" //false, por que no son del mismo tipo y los tipos tambien difieren.




//////////////////////////////////////////
let celsius = 30;
let fahrenheit = (celsius*1.8) + 32;
console.log( celsius + "grados Celcius equivale a " + fahrenheit + "grados fahrenheit ");

/////////////////////////////////////////


// Función para convertir grados Celsius a Fahrenheit
function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  // Obtener la temperatura en grados Celsius
  var temperaturaCelsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));
  
  // Convertir y mostrar el resultado en grados Fahrenheit
  var temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelsius);
  console.log(temperaturaCelsius + " grados Celsius son equivalentes a " + temperaturaFahrenheit + " grados Fahrenheit.");

////////////////////////////////////////////


