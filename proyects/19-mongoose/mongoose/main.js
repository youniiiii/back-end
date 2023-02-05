import mongoose, { Schema, model } from 'mongoose'

const host = 'localhost'
const port = '27017'

const username = 'root'
const password = 'mongopassword'

const database = 'coderhouse'

const uri = `mongodb://${username}:${password}@${host}:${port}/${database}?authSource=admin`;


function nuevoId() {
    return `${Date.now()}`
}

await mongoose.connect(uri)

const personaSchema = new Schema({
    id: { type: String, required: true },
    nombre: { type: String, required: true },
    edad: { type: Number, required: true }
});

// const dbPersonas = mongoose.model('personas', personaSchema)

// await dbPersonas.deleteMany({})

// await dbPersonas.create({ nombre: 'michael', anios: 30 })

// const personas = await dbPersonas.find()

const PersonaDBModel = model('personas', personaSchema)

// const persona = new PersonaDBModel({ id: nuevoId(), nombre: 'marian', edad: 36 })
// await persona.save()

// const persona = new PersonaDBModel({ nombre: 'marian', edad: 36 })
// await persona.save()

await PersonaDBModel.create({ id: 1, nombre: 'abc', edad: 18 })

const persona = await PersonaDBModel.findOne().lean()

const personaLiteral = JSON.parse(JSON.stringify(persona))

console.log(persona)

// if (persona) {
//     persona.nombre = 'mariano'
//     // persona.nombre = 15
//     // persona.edad = 'doce'
//     // persona.color = 'rojo'
//     persona.save()
// }
// console.log(persona)

// const personas = await Persona.find().select({ _id: 0, __v: 0 }).lean()
// console.log(personas)

// persona.nombre = 'cachito'

// await persona.save()

// const personas2 = await Persona.find().select({ _id: 0, __v: 0 }).lean()

// console.log(personas2)