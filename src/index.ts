import express from "express";
import { ExpressAuth } from "@auth/express";
import { authConfig } from "./config/authConfig";
import { currentSession } from "./middleware/authMiddleware";
import connectDB from "./config/db";
import protectedRoute from "./routes/protectedRoutes";
import cors from "cors";


const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};



const app = express();
const port = 8080;

connectDB();

app.use(express.json());

app.use(currentSession);

app.use(cors(corsOptions));

app.use("/api/auth/", ExpressAuth(authConfig));

app.use("/api/protected", protectedRoute);


app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
