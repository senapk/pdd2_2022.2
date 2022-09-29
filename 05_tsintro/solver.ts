let vet: number[] = [];
vet.push(5);
vet.push(7);
if (vet.length > 0) {
    let resp = vet.shift();
    if (resp !== undefined)
        console.log(resp * 2);
    console.log(vet);
}
