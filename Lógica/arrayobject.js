const nomes=["Daniel","Maria",""]
const pessoa = {nome:"",idade:10, email:""}
const pessoa1 ={}

const pessoas=[{
   nome:"Renata",
   idade:40     
},
{
    nome: "Jonatha",
    idade: 38
},
{
    nome:"joao",
    idade:8
}]

console.log(pessoas[0])

for(let i=0; i <pessoas.length;i++){
    console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} anos`)
}
