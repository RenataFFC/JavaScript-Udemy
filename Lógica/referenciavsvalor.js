function alteraarray(a){
    a.push("adicionado")
}

let arr = ["a"]
console.log(arr)
alteraarray(arr)
console.log(arr)
function alteraPrimitivo(p){
  p += " adicionado"
  console.log (" dentro da função:", p)
}
let msg = "mensagem"
console.log(msg)
alteraPrimitivo(msg)
console.log(msg)