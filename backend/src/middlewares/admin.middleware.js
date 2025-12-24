import jwt from "jsonwebtoken";

// admin authenication middlewares
const authAdmin = async (req, res, next) => {
  try {
    const { atoken } = req.headers;
    if (!atoken) {
      return res.status(400).json({
        success: false,
        message: "Not authorized login again",
      });
    }
    const decodedToken = jwt.verify(atoken, process.env.ADMIN_JWT_SECRET_KEY);
    if (decodedToken !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.status(400).json({
        success: false,
        message: "Not authorized login again",
      });
    }

    next();
  } catch (error) {
    console.log(error.message, "Failed to get admin token");
    return res.status(500).json({
      success: false,
      message: "server error in auth admin",
    });
  }
};

export default authAdmin