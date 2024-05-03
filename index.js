const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const productRouter = require("../BFF/routes/productRouter");
const userRouter = require("./routes/userRoutes");
const orderRouter = require("./routes/orderRouter");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use("/", productRouter);
app.use("/",orderRouter);
app.use("/",userRouter);

const port = 3001;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
