const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const poolData = {
   UserPoolId: "us-east-1_H4iWUUxNP",
   ClientId: "ht1alevn17mpoi0nunm0ja7s3"
};
const pool_region = "us-east-1";
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

// Middleware function to check if the user is logged in before allowing them to create an order
exports.checkAuthentication = function(req, res, next) {
    const accessToken = req.headers.authorization; 
    console.log("accessToken:", accessToken);
    
    if (!accessToken) {
        return res.status(401).json({ error: "Unauthorized: Access token is missing." });
    }

    // User is authenticated, proceed to the next middleware or route handler
    next();
};
