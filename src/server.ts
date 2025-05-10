import cors from "cors";
import express from "express";
import { errorHandler } from "./middlewares/errorHandler.mid";
import { pathHandler } from "./middlewares/pathHandler.mid";
import indexRouter  from "./routers/index.routers";

const server = express();

server.use(cors());
server.use(express.json());

server.use("/api", indexRouter);

server.use(errorHandler);
server.use(pathHandler);

export default server;