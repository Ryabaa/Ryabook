const jwt = require("jsonwebtoken");
const { secret } = require("../../config");

const roleMiddleware = (roles) => {
    return (req, res, next) => {
        if (req.method === "OPTIONS") {
            next();
        }
        try {
            const token = req.headers.authorization.split(" ")[1];
            if (!token) {
                return res.status(403).json({ message: "User not authorized" });
            }

            const { roles: userRoles } = jwt.verify(token, secret);
            let hasRole = false;

            userRoles.forEach((role) => {
                if (roles.includes(role)) {
                    hasRole = true;
                }
            });

            if (!hasRole) {
                return res.status(203).json({ message: "You don't have access" });
            }
            next();
        } catch (error) {
            return res.status(403).json({ message: "User not authorized" });
        }
    };
};

module.exports = roleMiddleware;
