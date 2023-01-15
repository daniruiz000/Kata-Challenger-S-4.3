/*KATA 1 - Contador de vocales
        Crear una función que devuelva el número de vocales 
        que tiene el string que le pasemos como parámetro.

        Consideramos que el string solo tiene letras minúsculas y espacios.
*/


let sentence = "Tengo la polla como un niño de 3 años";

let noVowels = (str)=> {
    let vowels = "aeiouAEIOU";   
    let vowelsNumber = 0;            
                 
    for(let i = 0; i < str.length; i++){     
        if (vowels.includes(str[i])) vowelsNumber++;                            
    }                                          
                                           
    console.log (vowelsNumber + ' es el número de vocales que contiene.');                 
}

noVowels(sentence);        




/*KATA 2 - Múltiplos de 3 y de 5

        Si enumerásemos todos los números naturales por debajo de 10 que 
        fuesen múltiplos de 3 y de 5 tendríamos el siguiente listado (3, 5, 6 y 9). 
        La suma de estos múltiplos sería 23.

        Crea un función que devuelva la suma de todos los múltiplos de 3 y 5 del 
        número que le pasemos.

        En caso de que el número sea múltiplo de ambos solo habrá que contarlo 
        un vez.
*/

let numerIntro = 45;

function multiple (number){

    naturalNumbers = [0];
    additionNumber = 0;

    for (let i =1 ; i<=number ; i++){
        if(((i%3) == 0) || ((i%5) == 0)){
            naturalNumbers.push(i);
        }
    }
    naturalNumbers.forEach(element => {
        additionNumber += element;
    });
    console.log(additionNumber + ' es la suma de todos los números naturales que contiene el número que son multiplos de 3 o de 5');
         
};

multiple(numerIntro);




/*KATA 3 - Encuentra el número que aparece un número impar de veces

        Crea una función que reciba como argumento un array de números 
        y devuelva aquel que aparecen únicamente un número impar de veces.

        Ejemplos: 

            [1]         → Devuelve el número 1, ya que aparece una única vez
            [3,3,5]     → Devuelve el 5, ya que aparece 1 vez.
            [2,1,1,2,2] → Devuelve 2, ya que aparece 3 veces
*/


let arrayIntro = [0,3,4,2,1,1,2,2,1];

function verifyOddTimesIncluded (array){
    let contador = 1;
    arrayOrder = array.sort();
    oddTimesIncluded = [];
    
    for (let i = 0 ; i < arrayOrder.length ; i++){
        if (arrayOrder[i] === arrayOrder[i+1]){
            contador++;
        }else{
            contador = 1;
        }
        if(contador % 2 !== 0){
            oddTimesIncluded.push(arrayOrder[i])
        }
    
    }

    console.log(oddTimesIncluded);
}

verifyOddTimesIncluded(arrayIntro);




/*KATA 4 - Código secreto

        Crea una función que reciba como parámetro un string y devuelva otro, 
        remplazando las letras por su posición en el alfabeto.

        Si algún caracter no se encuentra, simplemente lo ignoramos.
*/

let strIntro = 'caracter';

function positionCharter (str){
    
    let alfabeto = ["","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
    let positionsCharacterArray = [];

    for(let i = 0 ; i < str.length ; i++){
   
        if(alfabeto.includes(str[i])){
            positionsCharacterArray.push(alfabeto.indexOf(str[i]));
        }
    }

    console.log(positionsCharacterArray);
}

positionCharter(strIntro);






/*KATA 5 - Concatenar arrays

    Crea una función que reciba una serie de arrays como argumentos 
    y devuelva uno único ordenado.

    Ejemplo: 
        Recibe: 
            ([['Cristiano', 'Messi'], ['Neymar', 'Mbappe', Benzema'], 
            ['Vinicius', 'Kane'])  
        Devuelve: 
            ['Benzema', 'Cristiano', 'Kane', 'Mbappe', 'Messi', 
            'Neymar', 'Vinicius']
*/


function orderAddArrays (array){

    let addArrays = [];

    for(let i = 0 ; i< array.length ; i++){
        array[i].forEach(element => {
            addArrays.push(element);
        });
        
    }
    let orderArray = addArrays.sort();
    console.log(addArrays);
}

orderAddArrays([['Cristiano', 'Messi'], ['Neymar', 'Mbappe', 'Benzema'], 
['Vinicius', 'Kane']]);






/*KATA 6 - Slice

        Crea una función que reciba un array de números, la posición inicial 
        y final del nuevo array (opcional), y devuelva el nuevo array.

        Ejemplo 1: ([1, 2, 3], 0, 1) // => [1]
        Ejemplo 2: ([1, 2, 3], 1) // => [2,3]
*/

let introArray = []; 

function sliceArray (array, initPosition, finalPosition){

    let newArray = array.slice(initPosition, finalPosition);
    console.log(newArray);
};


sliceArray([1, 2, 3], 1);






/*KATA 7 - Encuentra el número que vale lo mismo que su índice

    Crea una función que  reciba un array de números y 
    devuelva los números que coinciden con su posición en el array.

    Ejemplos:
        [1,2,5,3] → Devuelve [3] que se encuentra en la posición 3 del array
        [1,5,20,4,16,8,6] → Devuelve [6] que se encuentra en la posición 6 del array
        [10,1,20,3,16,8,10] → Devuelve [1,3] ya que ambos coinciden.
*/




function coincidenceValeuPosition (array){
    let concidence = [];

    for (let i = 0 ; i < array.length ; i++){
        if(array[i]===i){
            concidence.push(array[i])
        }
    }
    console.log(concidence);
};

coincidenceValeuPosition([1,5,20,4,16,8,6]);







/*KATA 8 - Etiquetas de vehículos

        Tenemos una flota de vehículos y con las nuevas restricciones de 
        movilidad en Madrid, nos piden que todos tengan etiqueta de contaminación.

        Crea una función que reciba un array de objetos-coche y devuelva un 
        nuevo array con los objetos-coche. Cada coche tendrá un nueva propiedad 
        que sea etiqueta ( con valor ‘ECO’ en caso de que el coche sea híbrido y 
        ‘C’ en caso de que sea gasolina). 

        Dentro de la flota de coches solo tenemos esas 2 opciones así que no hay 
        que preocuparse por ninguna otra.

        Ejemplo:
            Entrada: 
                [{id: 1, modelo: ‘híbrido’, matricula:’4565HLM’ },
                {id: 2, modelo: ‘gasolina’, matricula:’5678MNL’ },
                {id: 3, modelo: ‘híbrido’, matricula:’1111LLL’ }] 

            Salida:
            [{id: 1, modelo: ‘híbrido’, matricula:’4565HLM’, etiqueta:’ECO’},
            {id: 2, modelo: ‘gasolina’, matricula:’5678MNL’, etiqueta:’C’},
            {id: 3, modelo: ‘híbrido’, matricula:’1111LLL’, etiqueta:’ECO’ }].
*/

function addEtiquetas (array){

    

    array.forEach(element => {       
        if(element.modelo === 'gasolina'){
            element.etiqueta = 'C'
        }else if(element.modelo === 'híbrido'){
            element.etiqueta = 'ECO'
        }
    });
    let newArray = array;
    console.log(newArray);
};
   


addEtiquetas([{id: 1, modelo: 'híbrido', matricula:'4565HLM' },
    {id: 2, modelo: 'gasolina', matricula:'5678MNL' },
    {id: 3, modelo: 'híbrido', matricula:'1111LLL'}] 
);





/*KATA 9 - Ordenación de un array según la propiedad

        Crea una función que reciba la lista de regalos de los reyes magos 
        y la ordene según la propiedad elegida.

        Ejemplo:        
            Entrada: 
                    ([{nombre: ‘Barbie’, categoria: ‘muñecas’ },
                    {nombre: ‘Lego’, categoria:’construcción’ },
                    {nombre: ‘Fifa2023’, categoria:’videojuego’ }], ‘nombre’);

            Salida:
                    [{nombre: ‘Barbie’, categoria: ‘muñecas’ },
                    {nombre: ‘Fifa2023’, categoria:’videojuego’ }
                    {nombre: ‘Lego’, categoria:’construcción’ }]
*/




function orderlist (array, prop){
    let newArray = array.sort((a, b) => (a[prop] < b[prop]) ? 1 :-1);
    
    console.log(newArray);
}

orderlist([{nombre: 'Barbie', categoria: 'muñecas' },
    {nombre: 'Lego', categoria:'construcción' },
    {nombre: 'Fifa2023', categoria:'videojuego' }], 'nombre') 






/*KATA 10 - Monopoli: ¿Quién tiene más dinero?

        Crea una función que reciba un listado de jugadores con el número de 
        billetes de cada cantidad que tienen y devuelva el jugador con más dinero. 

        No habrá más de un jugador que tenga el mayor número de billetes

        Ejemplo:
       Entrada:
            [{nombre: ‘Pedro’, billetesDe5: 10, billetesDe10: 3, billetestDe50: 1 },
            {nombre: ‘Luis’, billetesDe5: 10, billetesDe10: 1, billetestDe50: 2 },
                {nombre: ‘Gon’, , billetesDe5: 5, billetesDe10: 5, billetestDe50: 5 },];

            Salida:
                Gon
*/



function richer (array){
    for (let i = 0; i < array.length ; i++){
        array[i].dinero = (array[i].billetesDe5*5) + (array[i].billetesDe10*10) + (array[i].billetesDe50*50);        
    }
    newArray = array.sort((a, b) => b.dinero - a.dinero);
    let richer = newArray[0].nombre;
    console.log(richer);
}   

richer([{nombre: 'Pedro', billetesDe5: 10, billetesDe10: 3, billetesDe50: 1 },
    {nombre: 'Luis', billetesDe5: 10, billetesDe10: 1, billetesDe50: 2 },
        {nombre: 'Gon', billetesDe5: 5, billetesDe10: 5, billetesDe50: 5 }]);





/*KATA 11 - Mueve los 0 al final

    Crea una función que reciba un listado y mueva todos los 0 al final, 
    manteniendo el orden del resto de elementos.

    Ejemplo:
       Entrada: [1,0,true,0,’hola’, 5, 30, ‘a’]
       Salida: [1,true,’hola’, 5, 30, ‘a’,0,0]
*/

let listIntro = [1,0,true,0,'hola', 5, 30,'a'];

function zeroToEnd (array){

    let zeroArray = [];
    let noZeroArray = [];

    for (let i = 0 ; i<array.length ; i++){
        if(array[i]===0){
            zeroArray.push(array[i]);
        }else{
            noZeroArray.push(array[i]);
        }
    }
    newArray = noZeroArray.concat(zeroArray);
    console.log(newArray);
}

zeroToEnd(listIntro);






/*KATA 12 - Encuentra el string único

    Crea una función que reciba un listado de strings y devuelva 
    el string diferente al resto.

    Serán strings sin espacios.

    Ejemplo:

     Entrada: [ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]
     Salida : 'BbBb’

     Entrada: ['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba’]
     Salida : 'foo’
*/











/*KATA 13 - Tres en raya
    Crea una función que recibiendo un resultado del tablero del 3 en raya, 
    indique si algún jugador ha ganado la partida. Asumimos que recibimos 
    un tablero válido

            - 0 - Hueco en blanco
            - 1 - Jugador 1
            - 2 - Jugador 2

    La función devolverá:
        - -1 si nadie ha ganado todavía y el tablero tiene huecos por rellenar
        - 1 si el jugador 1 ha ganado
        - 2 si el jugador 2 ha ganado
        - 0 nadie ha ganado

    Ejemplo:
        Entrada:    
        [  [ 0, 2, 1],
           [ 0, 1, 2],
           [ 2, 1, 0] ]

        Salida: -1
*/


function tresEnRaya (array){
    let winer=0;
    for (let i = 0 ; i<array.length ; i++){
        arrayAdd=array[0].concat(array[1]).concat(array[2]);
    }
    for(let i =0; i<arrayAdd.length ; i++){
        if((arrayAdd[0] === arrayAdd[1])&&(arrayAdd[0] === arrayAdd[2])){
            winer = arrayAdd[0];
        }else if((arrayAdd[0] === arrayAdd[3])&&(arrayAdd[0] === arrayAdd[6])){
            winer = arrayAdd[0];
        }else if((arrayAdd[0] === arrayAdd[4])&&(arrayAdd[0] === arrayAdd[8])){
            winer = arrayAdd[0];
        }else if ((arrayAdd[2] === arrayAdd[4])&&(arrayAdd[2] === arrayAdd[6])){
            winer = arrayAdd[2];
        }else if ((arrayAdd[2] === arrayAdd[5])&&(arrayAdd[2] === arrayAdd[8])){
            winer = arrayAdd[2];
        }else if((arrayAdd[3] === arrayAdd[4])&&(arrayAdd[3] === arrayAdd[5])){
            winer = arrayAdd[3];
        }else if((arrayAdd[1] === arrayAdd[4])&&(arrayAdd[1] === arrayAdd[7])){
            winer = arrayAdd[1];
        }else if((arrayAdd[6] === arrayAdd[7])&&(arrayAdd[6] === arrayAdd[8])){
            winer = arrayAdd[6];
        }
    }
    console.log(winer);
};

tresEnRaya([ [ 0, 2, 1],
             [ 0, 1, 2],
             [ 1, 1, 0] ]);






/*KATA 14 - Validador sudokus

Crea una función que reciba el tablero del sudoku y devuelva true/false en función de si es válido o no:

validarSolucion([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); // => true

*/

let sudokuIntro = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ];



function sudoku (array){
    
    let serieRequired = [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9];
    let serieRequiredtoString = serieRequired.toString();
    let newArray =[];
    let sudokuResult = false;
  
    for( let i = 0 ; i<array.length ; i++ ){
        newArray = (newArray.concat(array[i]));
        let newArrayOrderToString = newArray.sort().toString();
    
        if (newArrayOrderToString === serieRequiredtoString) sudokuResult = true;
    }
    console.log(sudokuResult);    
};

sudoku(sudokuIntro);