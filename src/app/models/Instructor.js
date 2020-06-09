const db = require('../../config/db');
const { age, date, birthDay } = require('../../lib/utils');

module.exports = {
    all(callback) {
        db.query(`SELECT * FROM instructors`, function(err, results) {
            if (err) {
                return res.send('Database error!');
            }
            callback(results.rows);
        });
    },

    create(data, callback) {
        const query = `
            INSERT INTO instructors (avatar_url, name, birth, gender, services, created_at)
                VALUES ($1, $2, $3, $4, $5, $6)
                RETURNING id
        `;

        const values = [
            data.avatar_url,
            data.name,
            date(data.birth).iso,
            data.gender,
            data.services,
            date(Date.now()).iso
        ]

        db.query(query, values, function(err, results) {
            if (err) {
                return res.send('Database error!');
            }

            callback(results.rows[0]);
        });

    }
    
}
