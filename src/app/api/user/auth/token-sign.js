import jwt from "jsonwebtoken";
const generateToken = ({ payload }) => {
  return jwt.sign(payload, process.env.SECRET_JWT, {
    expiresIn: "15m"
  });
};
export default generateToken;
