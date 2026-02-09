const express = require("express");
const { PORT } = require("./config");
const apiRouter = require('./routes/index')
const app = express();
app.use(express.json());
app.use('/api', apiRouter)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
