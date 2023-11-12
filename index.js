const express = require("express");
const cors = require("cors");
const app = express();
const port = 5700;
const routes = require("./routes");

app.use(cors({ credentials: true, origin: `http://localhost:${port}` }));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
