 class usuario {
    constructor(nombre,apellido,libros,mascotas){
        this.nombre =nombre,
        this.apellido = apellido,
        this.libros = libros,
        this.mascotas =  mascotas
    }
    getFullName(){
        return this.nombre;
    }
    addMascotas(nombre){
    this.mascotas.push(nombre);
    }
    countMascotas(){}
    addBlock(nombres, autores){
        this.libros.push({nombre:nombres,autor:autores})
    }
    getBlockNames(){
        return this.libros
    }

}