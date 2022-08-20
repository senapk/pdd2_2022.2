
function existe(vet, value) {
    for (let elem of vet)
        if (elem == value)
            return true;
    return false;
}

function indexOf(vet, value) {
    for (let i = 0; i < vet.length; i++)
        if (vet[i] == value)
            return i;
    return -1;
}

function menor(vet) {
    let value = vet[0];
    for (let elem of vet)
        if (elem < value)
            value = elem;
    return value;
}

function pos_menor(vet) {
    let pos = 0;
    for (let i = 0; i < vet.length; i++)
}


let lista = [1, 2, 3, 4, 5, 6]
console.log(existe(lista, 9))
console.log(existe(lista, 4n))