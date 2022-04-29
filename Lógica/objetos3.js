const produto = {
 nome: "caneta",
 qtde: 10,
 comprar: function(n){
    console.log(this) 
    if ( n > this.qtde){
        return "qtde não disponivel"
    }
    this.qtde-=n
 }
}
teste: () {
    console.log("teste1")
    console.log(this)
}
   
teste2: () => {
    console.log(teste2)
    console.log(this)
}


//produto.comprar(3)
//console.log(produto)
//produto.comprar(13)
//console.log(produto)

produto.teste();
produto.teste2();