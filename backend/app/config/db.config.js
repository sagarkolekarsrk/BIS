module.exports = {
  HOST: "localhost",
  PORT: "1434",
  USER: "sa",
  PASSWORD: "ALVEO25",
  DB: "AlveoBookBank",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
