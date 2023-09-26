module.exports = {
  port: process.env.PORT || 3000,
  mongodbUrl:  'mongodb://127.0.0.1:27017/todo-list',
  tokenSecretKey:  '0rfFRKOz2LJ9dKlgMWKuuMmhJXWMHlIGkzdRbnGSxkwtZakk3E',
  tokenExpiryTime:  '1d',
}
