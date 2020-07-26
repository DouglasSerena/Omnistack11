import app from "./config/app";

const PORT = process.env.PORT || 3333;
app.listen(3333, () => console.log("> server start port " + PORT));
