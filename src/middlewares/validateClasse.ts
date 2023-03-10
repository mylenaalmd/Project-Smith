import { Request, Response, NextFunction } from 'express';

export default async function ValidateClasse(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { classe } = req.body;

  if (!classe) return res.status(400).json({ message: '"classe" is required' });

  if (typeof classe !== 'string') {
    return res.status(422).json({ message: '"classe" must be a string' });
  }
  if (classe.length <= 2) {
    return res.status(422).json({ message: '"classe" length must be at least 3 characters long' });
  }
  next();
}