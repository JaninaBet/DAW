let auto1={
    fabricante :"Toyota",
    modelo: "RAVA",
    color: "Rojo",
    cilindro: 2.0,
    detalle() { //se crea el metodo
        console.log("fabricante: " ,this.fabricante,"modelo: ", this.modelo);
    },
    detalle2() { //se crea el metodo
        console.log("color: ", this.color, "cilindrado: ", this.cilindro );
    }
}
auto1.detalle();
auto1.detalle2();
