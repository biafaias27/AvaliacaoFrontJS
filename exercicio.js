// function
//getElementById
//addEventListener
function exercicio9 (){
    const nota1 = Number(prompt("Digite a primeira nota"))
    const nota2 = Number(prompt("Digite a segunda nota"))
    const nota3 = Number(prompt("Digite a terceira nota"))
    
    const media =( nota1 + nota2 + nota3)
    if (media >= 7){
       alert ("Aprovado")
    }else if ( media >= 5 && media > 7){
    alert ("Recuperação")
    } else if ( media < 5) {
        ("Reprovado")
    }                       
}
const buttonexercicio9 = document.getElementById("exercicio9")
 buttonexercicio9 = document.addEventListener( 'click',() => {exercicio9 ()})


 // function
//getElementById
//addEventListener

function exercicio10 (){
    const sexo= Number(prompt("digite H para homem,M para mulher"))
    const altura= Number(prompt("Digite a altura"))

    if (sexo == "H" ){
    altura = (72.7 * altura) - 58
    alert ("peso ideal" + altura)
    } else if (sexo == "M")
      altura  = ( 62.1 * altura) - 44
        alert ("peso ideal" + altura)
}
const buttonexercicio10 = document.getElementById("exercicio10")
 buttonexercicio10 = document.addEventListener( 'click',() => {exercicio10()})


 // function
//getElementById
//addEventListener
 
function exercicio17 () {
    const primeiraNota= Number(prompt("Digite a nota1"))
    const segundaNota=Number(prompt("Digite a nota2"))
    const terceiranota=Number(prompt("Digite a nota3"))
}