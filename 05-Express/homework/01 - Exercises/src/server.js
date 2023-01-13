// const bodyParser = require("body-parser");
const express = require("express");

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
let publications = [];

const server = express();
// to enable parsing of json bodies for post requests
server.use(express.json());

server.post('/posts', (req, res) => {
    const { id, author, title, contents } = req.body

    if (!author || !title || !contents) return res.status(400).json({ error: "No se recibieron los parámetros necesarios para crear la publicación" })

    const publicación = { id, author, title, contents }
    publications.push(publicación)

    return res.status(201).json(publicación)
})

server.get('/posts', (req, res) => {
    const { term, author, title } = req.query

    if (term) {
        const filteredByTerm = publications.filter(p => p.title.includes(term) || p.contents.includes(term))

        if (filteredByTerm.length > 0) return res.status(200).json(filteredByTerm)
    }

    if (author && title) {
        const filtered = publications.filter(p => p.author === author && p.title === title)
        if (filtered.length > 0) return res.status(200).json(filtered)

        return res.status(400).json({ error: "No existe ninguna publicación con dicho título y autor indicado" })
    }

    return res.status(200).json(publications)
})

server.get('/posts/:author', (req, res) => {
    const { author } = req.params
    const filtered = publications.filter(p => p.author === author)

    if (filtered.length > 0) return res.status(200).json(filtered)

    return res.status(400).json({ error: "No existe ningun post del autor indicado" })
})

server.put('/posts/:id', (req, res) => {
    const { id } = req.params
    const { title, contents } = req.body

    if (!id || !title || !contents) return res.status(400).json({ error: "No se recibieron los parámetros necesarios para modificar la publicación" })

    const valid = publications.some(p => p.id === Number(id))
    if (!valid) res.status(400).json({ error: "No se recibió el id correcto necesario para modificar la publicación" })

    let publicación
    publications.map(p => {
        if (p.id === Number(id)) {
            p.title = title
            p.contents = contents
            publicación = p
        }
    })

    return res.status(200).json(publicación)
})

server.delete('/posts/:id', (req, res) => {
    const { id } = req.params

    if (!id) return res.status(400).json({ error: "No se recibió el id de la publicación a eliminar" })

    const valid = publications.some(p => p.id === id)
    if (!valid) return res.status(400).json({ error: "No se recibió el id correcto necesario para eliminar la publicación" })

    publications = publications.filter(p => p.id !== id)
    return res.status(202).json({ success: true })
})

server.delete('/author/:name', (req, res) => {
    const { name } = req.params

    if (!name) return res.status(400).json({ error: "No se recibió el nombre del autor" })

    const deleteArray = publications.filter(p => p.author === name)
    if (!deleteArray.length) return res.status(400).json({ error: "No se recibió el nombre correcto necesario para eliminar las publicaciones del autor" })

    publications = publications.filter(p => p.author !== name)
    return res.status(202).json(deleteArray)
})

//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
