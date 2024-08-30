const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");
const db = require("./config/mongoCon");
const userRouter = require("./routes/userRouter")
const productRouter = require("./routes/productRouter")
const ownerRouter = require("./routes/ownerRouter");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/owner", ownerRouter);
app.use("/user", userRouter);
app.use("/products", productRouter);

app.listen(PORT, () => console.log("Listening"));