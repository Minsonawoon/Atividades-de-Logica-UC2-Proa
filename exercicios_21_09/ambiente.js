let num = [5, 8, 2, 9, 3]

num.push(1) //adiciona o valor 1
num.sort() // deixa em ordem crescente
console.log(num) //mostra o array
console.log(`O vetor tem ${num.length} posições`) //mostra o tamanho
console.log(`O primeiro valor do vetor é ${num[0]}`) //mostra o valor de acordo com a posição 0
let pos = num.indexOf(8) //mostra a posição de acordo com o valor, se não for encontrado mostra -1
if(pos == -1){
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}
