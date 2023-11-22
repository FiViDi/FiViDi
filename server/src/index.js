const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const router = require("../routers/router");

// ?setting up the router from express
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ?Route
app.use(router);

// ?App listen port
app.listen(port, () => {
	console.log(`Games ini mendengarkan pada port ${port}`);
});
