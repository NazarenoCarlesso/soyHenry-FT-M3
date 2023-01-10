var fs = require("fs");
var http = require("http");
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️ */
/* AQUÍ DEBAJO PUEDES ESCRIBIR LA CONSTANTE DEL PUERTO */
const PORT = 3001;

/* ⚠️ LA LÍNEA SIGUIENTE TIENE QUE QUEDAR COMO ESTÁ PARA PODER EXPORTAR EL SERVIDOR ⚠️ */
/* AQUÍ DEBAJO YA PUEDES ESCRIBIR TÚ CÓDIGO REEMPLAZANDO EL VALOR DE NULL POR EL SERVIDOR */
module.exports = http.createServer((req, res) => {
  console.log(`Server raised in port ${PORT}`)
  console.log(req.url)
  if (req.url === '/api') {
    const data = fs.readFileSync('./utils/dogsData.json')
    if (data) {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      return res.end(JSON.stringify(JSON.parse(data)))
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      return res.end('json not found')
    }
  }
  if (req.url === '/allDogs') {
    const page = fs.readFileSync('./utils/allDogs.html', 'UTF8')
    if (page) {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      return res.end(page)
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      return res.end('json not found')
    }
  }
  res.writeHead(404, { 'Content-Type': 'text/plain' })
  return res.end('Route not found')
}).listen(PORT, 'localhost')