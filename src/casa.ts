class Puerta {
    private _color: string;
    constructor(color:string){
        this._color = color;
    }
    public abrir(): void {
        console.log(`La puerta de color ${this._color} se ha abierto`);        
    }
    public cerrar(): void {
        console.log(`La puerta de color ${this._color} se ha cerrado`);
    }
}
class Casa {
    private _direccion: string;
    private _puerta: Puerta;

    constructor(direccion: string, puerta: Puerta) {
        this._direccion = direccion;
        this._puerta = puerta;
    }
    public entrar(): void {
        console.log(`Entrando a la casa en ${this._direccion}`);
        this._puerta.abrir();
    }
    public salir(): void {
        console.log(`Saliendo de la casa en ${this._direccion}`);
        this._puerta.cerrar();
    }
}
// Crear una puerta
const puerta = new Puerta("marrón");
// Crear una casa con esa puerta
const casa = new Casa("Calle Falsa 123", puerta);
// Interactuar con la casa
casa.entrar();
console.log("---------------------------------");
casa.salir();