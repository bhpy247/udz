import express from "express";
import cors from "cors";
import { config } from "./config";
import routes from "./routes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

// Middlewares
app.use(cors({ origin: config.corsOrigin }));
app.use(express.json());

// Health Check
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    service: "Udaipur Unfolded API",
    time: new Date().toISOString(),
  });
});

// Mount API routes
app.use("/api", routes);

// Error handling middleware
app.use(errorHandler);

// Start server
if (process.env.NODE_ENV !== "test") {
  app.listen(config.port, () => {
    console.log(`[Udaipur Unfolded Backend] Server running on http://localhost:${config.port}`);
  });
}

export default app;
