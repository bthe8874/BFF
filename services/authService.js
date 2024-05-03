
global.navigator = () => null;
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const poolData = {
   UserPoolId: "us-east-1_H4iWUUxNP",
   ClientId: "ht1alevn17mpoi0nunm0ja7s3"
};
const pool_region = "us-east-1";
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

exports.Register = function (body, callback) {
   var name = body.name;
   var email = body.email;
   var password = body.password;
   var attributeList = [];
   
   attributeList.push(new    AmazonCognitoIdentity.CognitoUserAttribute({ Name: "email", Value: email }));
   userPool.signUp(name, password, attributeList, null, function (err, result) {
     if (err)
         callback(err);
     var cognitoUser = result.user;
     callback(null, cognitoUser);
   })
}
// exports.Login = function (body, callback) {
//    var userName = body.name;
//    var password = body.password;
//    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
//         Username: userName,
//         Password: password
//     });
//     var userData = {
//         Username: userName,
//         Pool: userPool
//     }
//    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
//    cognitoUser.authenticateUser(authenticationDetails, {
//          onSuccess: function (result) {
//             var accessToken = result.getAccessToken().getJwtToken();
//             localStorage.setItem("accessToken", accessToken); 
//             var decodedToken = decodeAccessToken(accessToken);            
//             callback({ accessToken, user: decodedToken });
          
//         },
//         onFailure: function (err) {
//            callback(err);
//        }
//    });
// };


exports.Login = function (body, callback) {
   var userName = body.name;
   var password = body.password;
   var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username: userName,
        Password: password
    });
    var userData = {
        Username: userName,
        Pool: userPool
    }
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
           var accesstoken = result.getAccessToken().getJwtToken();
           var decodedToken = decodeAccessToken(accesstoken); 
           callback(null, decodedToken);
           console.info("Logging Successfull.")
        },
        onFailure: (function (err) {
           callback(err);
       })
   })
};

function decodeAccessToken(accessToken) {
    const parts = accessToken.split(".");
    const encodedPayload = parts[1];
    const decodedPayload = Buffer.from(encodedPayload, 'base64').toString('utf-8');
    const userData = JSON.parse(decodedPayload);
    return userData;
}







