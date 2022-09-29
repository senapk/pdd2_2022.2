
class Time {
    private hora: number = 0;
    private minuto: number = 0;
    private segundo: number = 0;

    constructor(hora: number, minuto: number, segundo: number) {
        // this.hora = 0;
        // this.minuto = 0;
        // this.segundo = 0;
        this.setHora(hora);
        this.minuto = minuto;
        this.segundo = segundo;
    }
    public getHora(): number {
        return this.hora;
    }
    public setHora(value: number) {
        if (value < 0 || value > 23) {
            console.log("fail: hora invalida");
        } else {
            this.hora = value;
        }
    }
}

function main() {
    let tempo = new Time(200, 45, 30);
    console.log(tempo.getHora())
    tempo.setHora(500);
    console.log(tempo.getHora())
    
    
}

main()