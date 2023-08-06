const express = require('express');
const mysql = require('mysql');
const { format } = require('date-fns');

const app = express();
const port = 3000;

const dbConnection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
});

dbConnection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão com o banco de dados estabelecida.');
});

app.get('/', (req, res) => {
    const nome = 'Samoel';
    const query = 'INSERT INTO people (nome) VALUES (?)';
    dbConnection.query(query, [nome], (err) => {
        if (err) {
            console.error('Erro ao inserir o nome no banco de dados:', err);
            return res.status(500).send('Erro ao inserir o nome no banco de dados');
        }
        console.log('Nome inserido no banco de dados.');
    });

    // Listar os nomes cadastrados no banco de dados com a coluna data_hora
    const selectQuery = 'SELECT nome, data_hora FROM people';
    dbConnection.query(selectQuery, (err, results) => {
        if (err) {
            console.error('Erro ao consultar o banco de dados:', err);
            return res.status(500).send('Erro ao consultar o banco de dados');
        }

        const nomesComDataHora = results.map((row) => {
            const dataHora = format(new Date(row.data_hora), 'dd/MM/yyyy HH:mm');
            return `${row.nome} - ${dataHora}`;
        });

        res.send(`
            <h1>Full Cycle Rocks!</h1>
            <p>Lista de nomes cadastrada no banco de dados:</p>
            <ul>
                ${nomesComDataHora.map((nome) => `<li>${nome}</li>`).join('')}
            </ul>
        `);
    });
});

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`);
});
