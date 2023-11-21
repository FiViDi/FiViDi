const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// ?setting up the router from express
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
	console.log(`Games ini mendengarkan pada port ${port}`);
});
