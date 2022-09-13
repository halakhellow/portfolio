// to use .env variables
const Dotenv = require("dotenv-webpack");

module.exports = {
  plugins: [new Dotenv()],
};
