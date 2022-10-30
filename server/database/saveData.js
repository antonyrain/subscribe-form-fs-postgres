const { pool } = require('./connectDB')

async function save (data) {
    const text = 'INSERT INTO subscribers (name, email, created) VALUES ($1, $2, $3)'
    const values = [
        data['name'],
        data['email'],
        data['created']
    ]
    await pool.query(text, values)
};

module.exports = { save }