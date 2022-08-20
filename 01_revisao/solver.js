//programa: cmd, powershell, tilix, gnome-terminal, 
//shell: cmd, powershell, bash, zsh
//comandos: ls, cd, node, mkdir

//nao retorne tipos diferentes
function dividir(a, b) {
    if (b != 0)
        return a / b;
    console.log("erro divisao por zero")
    return 0;
}

function pegar_faixa_etaria(idade) {
    if (idade < 12)
        return "crianca"; 
    if (idade < 18)
        return "adolescente";
    if (idade < 65)
        return "adulto";
    return "idoso"; //<---------- retorno default
}

function soma2(a, b) {
    return a + b;
}

function eh_primo(value) {
    for (let i = 2; i < value; i++)
        if (value % i == 0)
            return false;
    return true;
}

let value = 15;

let lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
lista.map((x) => eh_primo(x) ? x : -1).filter((x) => x != -1);

//lambda
// let soma3 = (a, b, c) => {
//     return a + b + c;
// }

// let linha = "1 2 3 4 5 6 7 8 9";
// linha.split(" ").map((x) => +x)

// let idades = [12, 17, 89, 15, 6, 90]
// let faixas = idades.map(pegar_faixa_etaria)
// console.log(faixas)

// console.log(c)
// if (idade < 12) {
//     faixa = "crianca";
// } else if (idade < 18) {
//     faixa = "adolescente";
// } else if (idade < 65) {
//     faixa = "adulto";
// } else {
//     faixa = "idoso";
// }


