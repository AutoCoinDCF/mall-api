const mysql = require('think-model-mysql');

module.exports = {
  handle: mysql,
  database: 'nideshop',
  prefix: 'nideshop_',
  encoding: 'utf8mb4',
  host: '123.249.31.84',
  port: '3306',
  user: 'root',
  password: '123456',
  dateStrings: true
};
