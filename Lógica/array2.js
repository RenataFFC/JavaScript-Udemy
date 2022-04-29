const pessoa = {
    nome: "Maria",
    idade: 40,
    email: "maria@hotmail.com"    
}
//console.log (pessoa)

for(let prop in pessoa){
    console.log(prop)
    console.log(pessoa[prop])
}