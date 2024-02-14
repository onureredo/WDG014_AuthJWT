import jwt from 'jsonwebtoken';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

const verifyToken = asyncHandler(async (req, res, next) => {
  /*
      Check if token is present in request [x]
          if not return error [x]
          if present 
              verifyToken [x]
                  if invalid return error [x]
                  if valid 
                      create uid property in request [x]
                      next [x]
*/

  const token = req.cookies.token;

  if (!token) throw new ErrorResponse('Please login');

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.uid = decoded.uid;
  next();
});

export default verifyToken;
