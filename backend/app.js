require("dotenv").config()
const Server = require("./app/config/app")

const server = new Server();

const PORT = process.env.PORT || 3000;

server.app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});