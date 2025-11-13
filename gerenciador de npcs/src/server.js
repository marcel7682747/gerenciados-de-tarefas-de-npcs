import http from "htpp";

const servidor = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/plain"})
})