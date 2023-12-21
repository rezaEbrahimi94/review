import { CognitoRefreshToken, CognitoUser } from 'amazon-cognito-identity-js';
import UserPool from './UserPool';

// Function to generate new access token if refresh token is still valid
export const regenerateAccessToken = async (username: string, refreshToken: string) => {
  return new Promise((resolve, reject) => {
    const userData = {
        Username: username,
        Pool: UserPool
    };

    const cognitoUser = new CognitoUser(userData);

    cognitoUser.refreshSession(new CognitoRefreshToken({ RefreshToken: refreshToken }), (err, session) => {
      if (err) {
        console.error('Error refreshing session:', err);
        reject(err);
      } else {
        const accessToken = session.getAccessToken().getJwtToken();
        resolve(accessToken);
      }
    });
  });
}
