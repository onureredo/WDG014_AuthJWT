import express from 'express';
import cors from 'cors';
import './db/server.js';
import authRouter from './routes/authRouter.js';
import { errorHandler } from './middlewares/ErrorHandler.js';
import postsRouter from './routes/postRouter.js';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors()); // Enable Cross-Origin-Resource Sharing
// app.use(cors({ origin: 'https://website.com' })); allow access only from prod. website
// app.use(cors({ origin: ['https://website.com', 'https://anotherwebsite.com'] }));
app.use(express.json()); // Parse incomming requests with JSON payloads

// ROUTES
app.use('/auth', authRouter);
app.use('/posts', postsRouter);

// Error Handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
