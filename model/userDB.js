const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "mvcuser",
  password: "mvcpass",
  database: "patternMVCAuth",
  connectionLimit: 5,
});

function getUsers(callback) {
  const sql = "SELECT * FROM users";
  pool.execute(sql, function (err, result,fields) {
    callback(err,result,fields);
  });
}


module.exports = {
  getUsers
};
