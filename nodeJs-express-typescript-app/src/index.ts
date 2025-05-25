import express from "express";
import router from "./routes/router";

const app = express();
const PORT = 8800;

app.use("/", router);

app.listen(PORT, '0.0.0.0', () => console.log(`Server Started on PORT ${PORT} 🎉`));
