import { CognitoUser, CognitoRefreshToken, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from '@/components/aws-cognito/UserPool';
import { serialize } from 'cookie';

// if 'Remember me' is activated, session is set to 30 day 
// const MAX_AGE_30 = 60 * 60 * 24 * 1000 * 30; 
// const EXPIRE_30 = new Date(Date.now() + 86400 * 1000 * 30); 

/* Authorising api
  Using Amazon Cognito to authorise user
  Assign token when user signin successfully
*/
export async function POST(request: Request) {
  const body = await request.json();
  const { username, password } = body;

  const user = new CognitoUser({
    Username: username,
    Pool: UserPool,
  });

  const authDetails = new AuthenticationDetails({
    Username: username,
    Password: password,
  });

  try {
    await authorizeUser(user, authDetails);

    // Fetch the access token from the newly authenticated user session
    const session = user.getSignInUserSession();
    const newAccessToken = session?.getAccessToken().getJwtToken();

     // Use the refresh token to get a new access token
     const refreshToken = new CognitoRefreshToken({ RefreshToken: session?.getRefreshToken().getToken() ?? '' });

    const accessTokenCookie = serialize('accessToken', newAccessToken || '', {
      httpOnly: false,
      secure: false,
      sameSite: 'strict',
      path: '/',
    });

    const refreshCookie = serialize('refreshCookie',  refreshToken.getToken(), {
      httpOnly: false,
      secure: false,
      sameSite: 'strict',
      path: '/',
    });

    const combinedCookies = [accessTokenCookie, refreshCookie].join(', ');

    const response = {
      message: 'Authenticated!'
    };
    
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { 'Set-Cookie': combinedCookies},
    });

  } catch (error) {
    return new Response(JSON.stringify({ message: error }), {
      status: 401,
    });
  }
}

// Function for authorising user by using AWS Cognito
const authorizeUser = (user: CognitoUser, authDetails: AuthenticationDetails) => {
  return new Promise((resolve, reject) => {
    user.authenticateUser(authDetails, {
      onSuccess: () => {
        console.log('Authorized');
        return resolve('Authorized!');
      },
      onFailure: () => {
        console.log('Unauthorized');
        return reject('Unauthorized!');
      },
      newPasswordRequired: () => {
        return resolve('Authorized!');
      },
    });
  });
}
