const { Client } = require('pg');
const express = require('express');
const app = express();

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'polling_app',
    password: 'root',
    port: 5432
});

app.get('/read', function(req, res) {
    const query = `SELECT * FROM polls`;    
    client.query(query, (err, result) => {
        if (err) {
            console.log(err.stack);
            res.status(500).send('Error retrieving Polls');
        } else {
            res.json(result.rows);
        }
    });
    client.connect();
});
  
app.delete('/delete/(:id)', function(req, res) {
    const idPoll = req.params.id;
    const query = `DELETE FROM polls WHERE id = ?`;
    const values = [idPoll];
    client.query(query, values, (err, result)=> {
        if (err) {
            console.log(err.stack);
            res.status(500).send('Error deleting Polls');
        } else {
            res.status(200).send(`Polls ${idPoll} deleted successfully`);
        }
    });
    client.connect();
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});