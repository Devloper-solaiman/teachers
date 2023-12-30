import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrors from './app/midlewere/globalErrorhandler';
import notFound from './app/midlewere/NotFound';
import route from './app/routes';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use('/api/v1', route)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(globalErrors)
app.use(notFound)
export default app;
