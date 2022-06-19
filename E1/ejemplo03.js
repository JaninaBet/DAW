function Automovil(fabricante, modelo, color, cilindrada) {
    this.fabricante = fabricante;//this hace referencia a la instancia
    this.modelo = modelo;
    this.color = color;
    this.cilindrada = cilindrada;
}
let auto1= new Automovil("Toyota","Rayz","rojo",2.4);
console.log(auto1);