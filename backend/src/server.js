<<<<<<< HEAD
const app = require('./app');
const dotenv = require('dotenv');

const PORT = process.env.PORT || 3333;

dotenv.config();

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));
=======
// Abertura do servidor
const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
>>>>>>> 43685fa (Ajustes)
