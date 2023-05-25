import { Router } from 'express';

const authService = Router();

authService.post('/login', (req, res) => {
  console.log(req.body);
  
  const response = {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  }

  res.status(201).json(response);
});

export { authService }