
class Car {
    pass;
    passMax;
    fuel;
    fuelMax;
    km;
    
    constructor(passMax, fuelMax) {
        this.pass = 0;
        this.passMax = passMax;
        this.fuel = 0;
        this.fuelMax = fuelMax;
        this.km = 0;
    }

    entrar() {
        if (this.pass == this.passMax) {
            console.log("fail: carro lotado");
        } else {
            this.pass += 1;
        }
    }
    sair() {
        if (this.pass == 0) {
            console.log("fail: nao tem ninguem");
        } else {
            this.pass -= 1;
        }
    }

    abastecer(fuel) {
        // this.fuel += fuel;
        // if (this.fuel > this.fuelMax)
        //     this.fuel = this.fuelMax;
        this.fuel = Math.min(this.fuel + fuel, this.fuelMax);
    }

    drive(km) {
        if (this.pass == 0) {
            console.log("fail: sem passageiros");
            return;
        }
        if ()
        //verificar se tem gasolina
        //verificar se consegue chegar no destino
            //se conseguir, incremente km, decremente fuel
            //se nao conseguir, andar o tanto quanto conseguir e avisar
    }

    toString() {
        return "pass" + this.pass + "/" + this.passMax +
              " fuel: " + this.fuel + "/" + this.fuelMax;
    }
}

let car = new Car(2, 30);
car.entrar();
car.entrar();
console.log("" + car);
car.entrar();
console.log("" + car);
car.sair();
car.sair();
car.sair();
car.abastecer(20);
console.log("" + car);
car.abastecer(20);
console.log("" + car);



