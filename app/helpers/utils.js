import jwt from 'jsonwebtoken';

function createToken(expireTime, userInfos) {
  const token = jwt.sign(userInfos, process.env.TOKEN_SECRET, {
    expiresIn: expireTime,
  });
  return token;
}

export default createToken;