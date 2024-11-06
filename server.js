const http = require('http');
const querystring = require('querystring');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'GET'){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(`
            <html>
            <body>
            <h2>Vagas de emprego</h2>
            <form action = "/" method="post">
            <label>Nome: <input type="text" name="nome" /></label><br>
            <label>E-mail: <input type="text" email="email" /></label><br>
            <label>Senha: <input type="text"password="password" /></label><br>
            <button type="submit">Enviar</button>
            </form>
            </body>
            </html>
        
    `);
    }
    else if (req.method === 'POST'){
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        })
    };
    req.on('end', () => {
        const parsedData = querystring.parse(body);

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`
            <html>
            <body>
            <h2><Dados recebidos:</h2>
            <p>Nome: ${parsedData.nome}</p>
            <p>E-mail: ${parsedData.email}</p>
            </body>
            </html>
            `);
    });
   
});

server.listen(PORT, () =>
{
    console.log('Servidor de pé em: http://localhost:${PORT}');
});