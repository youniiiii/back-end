 class usuario {
    constructor(nombre,apellido,libros,mascotas){
        this.nombre =nombre,
        this.apellido = apellido,
        this.libros = libros,
        this.mascotas =  mascotas
    }
    getFullName(){
        return `{this.nombre} {this.apellido}`;

    }
    addMascotas(nombre){
    this.mascotas.push(nombre);
    }
    countMascotas(
    ){
    return this.mascotas.length
    }
    addBlock(nombre, autor){
        this.libros.push({nombre,autor})
    }
    getBlockNames(){
            let bookNames= this.libros.map(libro => libro.nombre)
            return bookNames
    }

}