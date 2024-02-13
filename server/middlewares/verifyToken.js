import jwt from 'jsonwebtoken';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

const verifyToken = asyncHandler(async (req, res, next) => {
  /*
        Check if the token is present in request
            - If not, return an Error
            - If present:
                - veriyToken
                - If invalid, return an Error,
                - If valid
                    - Create UID property in request
                    - next
    */

  const { authorization } = req.headers;
  if (!authorization) throw new ErrorResponse('Please login', 401);

  const decoded = jwt.verify(authorization, process.env.JWT_SECRET);
  req.uid = decoded.uid;
  next();
});

export default verifyToken;
