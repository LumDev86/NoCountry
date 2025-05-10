import { Router } from "express";
import messageRoutes from "./message.routes";
import userRoutes from "./user.routes";
import chatRoutes from "./chat.routes";

const router = Router();

router.use("/messages", messageRoutes);
router.use("/users", userRoutes);
router.use("/chats", chatRoutes);

export default router;
