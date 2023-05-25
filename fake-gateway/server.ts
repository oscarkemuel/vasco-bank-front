import express from 'express';
import { authService } from './services/authService';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors({ origin: '*' })) ;

// set services
app.use('/api/auth', authService)

app.get('/', (req, res) => {
  const services = [
    {
      name: 'auth',
      url: 'http://localhost:8000/api/auth'
    }
  ]

  res.json({
    message: 'Hello from fake gateway',
    services
  })
});

app.listen(8000, () => {
  console.log('Fake gateway started in 8000');
});