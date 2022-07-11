import jwt from 'jsonwebtoken';

/**
 * This function generates a session token and returns it
 * @param id: string - id user
 */
const generateJWT = ( id: string ) => {
    return new Promise((resolve, reject) => {
        const secretKey = process.env.SECRETORPRIVATEKEY || '';
        const payload = { id };
        jwt.sign( payload, secretKey, {
            expiresIn: '24h'
        }, (err, token) => {
            if(err){
                console.log(err);
                reject('Could not generate token 💀');
            } else {
                resolve( token );
            }
        });
    });
};

export default generateJWT;