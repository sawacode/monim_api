var jwt = require('jsonwebtoken')

const JWT_SIGN_SECRET = '01fsaetffd25dfd5f4fdfloknfoz45df1cvfjk2zvidyfdjdoxlkdghsxdre';

//Export function
module.exports = {
    /**
    *Génerer un token
    */
    generateTokenForUser: (userToken) => {

        return jwt.sign({
                userId: userToken.id,
                userEmail: userToken.email,
                userPhone: userToken.phone,
                role: userToken.role_slog
            },
            JWT_SIGN_SECRET, {
                expiresIn: '86400h'
            });
    },
    
    parseAuthorization: (authorization) => {
        return (authorization != null) ? authorization.replace('Bearer ', '') : null;
    },

    getUser: (authorization) => {
        let userId = null;
        let token = module.exports.parseAuthorization(authorization);
        if (token != null) {
            try {
                let jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
                if (jwtToken != null) {
                    userId = jwtToken
                }
            } catch (err) {
                console.log('token error: ' + err);
                return null;
            }
        }
        return userId;
    }
}