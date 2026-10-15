class Persona {
    public _nombre: string;
    private _edad: number;

    constructor(nombre: string, edad: number) {
        this._nombre = nombre;
        this._edad = edad;
    }
    public saludar(): void {
        console.log(`Hola, mi nombre es ${this._nombre} y mi edad es ${this._edad}`);
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


class Estudiante extends Persona {
    private _carrera: string;

    constructor(nombre: string, edad: number, carrera: string) {
        super(nombre, edad);
        this._carrera = carrera;
    }

    public estudiar(): void {
        console.log(`${this._nombre} está estudiando la carrera de ${this._carrera}`);
    }

    // Getter para la propiedad carrera (para acceder a ella desde fuera de la clase)
    public get carrera(): string {
        return this._carrera;
    }
    // Setter para la propiedad carrera (para modificarla desde fuera de la clase)
    public set carrera(carrera: string) {
        if(carrera.trim() !== "") {
            this._carrera = carrera;
        } else {
            console.log("La carrera no puede estar vacía");
        }
    } 

    // Polimorfismo: Sobrescribiendo el método saludar de la clase Persona
    public saludar(): void {
        console.log(`Hola, mi nombre es ${this._nombre}, mi edad es ${this.edad} y estudio la carrera de ${this._carrera}`);
    }
}

// Polimorfismo

const persona = new Persona("Luis", 135);
const estudiante = new Estudiante("Luis", 135, "Ingeniería de Software");
persona.saludar();
estudiante.saludar();
