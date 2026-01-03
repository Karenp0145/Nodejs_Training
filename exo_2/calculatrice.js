const  nombre1  =  10;

const  nombre2  =  5;



const  addition  =  (a,  b)  => a + b;

const  soustraction  =  (a,  b)  => a - b;

const  multiplication  =  (a,  b)  => a * b;

const  division  =  (a,  b)  => a / b;


console.log(`Addition : ${nombre1} + ${nombre2} = ${addition(nombre1,  nombre2)}`);

console.log(`Soustraction : ${nombre1} - ${nombre2} = ${soustraction(nombre1,  nombre2)}`);

console.log(`Multiplication : ${nombre1} × ${nombre2} = ${multiplication(nombre1,  nombre2)}`);

console.log(`Division : ${nombre1} ÷ ${nombre2} = ${division(nombre1,  nombre2)}`);

//Calculateur IMC

const poids = 60;

const taille = 170;

const imc = (a, b) => a / (b * b);

console.log(`IMC : ${poids} kg, ${taille} cm : ${imc(poids, taille)}`);







module.exports  =  {

addition,

soustraction

};