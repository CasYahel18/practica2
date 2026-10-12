class Persona {
    public _nombre: string;
    private _edad: number;

    constructor(nombre: string, edad: number) {
        this._nombre = nombre;
        this._edad = edad;
    }
    public saludar(): void {
        console.log(`Hola, mi nombre es ${this._nombre}
        y mi edad es ${this._edad}`);
    }
     public get edad(): number {
        return this._edad;
    }

    public set edad(edad: number) {
        if (edad >= 0) {
            this._edad = edad;
        } else {
            console.log("La edad no puede ser negativa");
        }
}
}

const persona = new Persona("Yahel", 18);
persona.saludar();
persona._nombre = "Alberto";
persona.saludar();
persona.saludar();
console.log('Mi nombre es: ', persona._nombre); // Si
console.log('La edad es: ', persona.edad); // Si
persona.edad = 100; // Si
persona.saludar(); // Si
persona.edad = -3; //

