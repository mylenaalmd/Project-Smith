import express from "express";
import productsRouter from "./router/products.router";
// import ordersRouter from "./router/ordersRouter";
import usersRouter from "./router/usersRouter";
// import loginRouter from "./router/loginRouter";

const app = express();

app.use(express.json());

// app.use("/login", loginRouter);
// app.use("/orders", ordersRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);
// app.use(errorHandler);

export default app;
