let idade =14;
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar = (idade>=18||paisPresentes)&& comprouBilhete;

console.log(`Pode viajar: ${podeViajar}`);

//let msgMaiorIdade = "'"
//if (idade >= 18){
//     msgMaior Idade = "É maior de idade"
//}else{
//    msgMaiorIdade = " É menor de idade"
  
//}
// Valor ternario
let msgMaiorIdade = (idade >=18) ? "É maior de idade": " É menor de idade"


if(!comprouBilhete) {
    console.log( "Não comprou bilhete")
}else{
    console.log (msgMaiorIdade)
    }

