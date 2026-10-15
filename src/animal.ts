abstract class Animal {
    constructor(public nombre: string){}

    abstract hacerSonido(): void; //Método abstracto
    // Método concreto
    moverse(): void { 
        console.log(`${this.nombre} se está moviendo`);
    }
}
// Clase derivada Perro que extiende de Animal
class Perro extends Animal {
    hacerSonido(): void {
        // Implementación del método abstracto
        console.log(`${this.nombre} hace: ¡Guau!`);
    }
}

// Clase derivada Gato que extiende de Animal
class Gato extends Animal {
    // Implementación del método abstracto
    hacerSonido(): void {
        console.log(`${this.nombre} hace: ¡Miau!`);
    }
}

 // const animal = new Animal("Animal"); // No se puede instanciar porque es abstracta
const perro = new Perro("Rex");
const gato = new Gato("Michi");

perro.hacerSonido();
perro.moverse();
gato.hacerSonido();
gato.moverse();