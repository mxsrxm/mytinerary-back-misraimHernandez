import express from "express";
import "dotenv/config.js";
import "./config/database.js";
import cors from "cors"
import morgan from "morgan"
import indexRouter from "./router/index.js";

import not_found_handler from "./middlewares/not_found_handler.js";
import error_handler from "./middlewares/error_handler.js";
import bad_request_handler from "./middlewares/bad_request_handler.js";
import handleUnauthorized from "./middlewares/handleUnauthorized.js";
import handleForbidden from "./middlewares/handleForbidden.js";
import handleRequestTimeout from "./middlewares/handleRequestTimeout.js";
import handleTooManyRequests from "./middlewares/handleTooManyRequests.js";

const server = express()
const PORT = process.env.PORT || 8080
const ready = () => console.log("Server is ready " + PORT);

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cors())
server.use(morgan('dev'))

server.use('/api', indexRouter)

server.use(bad_request_handler)
server.use(handleUnauthorized);
server.use(handleForbidden);
server.use(not_found_handler)
server.use(handleRequestTimeout);
server.use(handleTooManyRequests);
server.use(error_handler)

server.listen(PORT, ready)