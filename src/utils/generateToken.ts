import jwt, { Secret } from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

const generateToken = (payload: object): string => {
  const token = jwt.sign(payload, JWT_SECRET as Secret);
  return token;
};

export default generateToken;
