import { Request, Response, NextFunction } from 'express';
import jwt, { Secret } from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

export = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization;

  if (!token) return res.status(400).json({ message: 'Token not found' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET as Secret);
    req.cookies = decoded;
    return next();
  } catch (e) {
    return res.status(422).json({ message: 'Invalid token' });
  }
};