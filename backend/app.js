
import express from "express"
import morgan from "morgan";
import connect from "./db/db.js";
import userRoutes from "./routes/user.route.js";
import projectRoutes from "./routes/project.route.js"
import cookieParser from "cookie-parser";
import aiRoutes from './routes/ai.route.js'
import cors from 'cors'
connect();
export const app = express();
app.use(cors())
app.use(cookieParser());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));

app.use('/users', userRoutes);
app.use('/projects',projectRoutes);
app.use("/ai",aiRoutes);



