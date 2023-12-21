import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { serialize } from 'cookie';
import { regenerateAccessToken } from '@/components/aws-cognito/GenerateAccessToken';

export async function GET() {
  const cookieStore = cookies();
  const accessTokenCookie = cookieStore.get('accessToken');
  const token = accessTokenCookie?.value;

  const seralized = serialize('accessToken' || '', '', {
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
    maxAge: 0,
    path: '/',
  });

  const isTokenValid = (token: string) => {
    try {
      const decodedToken = parseJwt(token); // function to decode the JWT token
      const tokenExpiration = decodedToken.exp; // Get the expiration time

      const currentTime = Math.floor(Date.now() / 1000);

      // Check if the token is expired by comparing the expiration time with the current time
      return tokenExpiration > currentTime;
    } catch (error) {
      console.error('Error decoding access token:', error);
      return false; // Return false if an error occurs during decoding
    }
  };

  if (token) {
    if (isTokenValid(token)) {
      // Token is valid, process request
      const response = {
        message: 'Authenticated!'
      }
      return new Response(JSON.stringify(response), {
        status: 200,
      })
    } else {
      // Token is expired or invalid, return error
      return NextResponse.json(
        {
          message: 'Unauthorised!'
        },
        {
          status: 401,
          headers: { 'Set-Cookie': seralized},
        }
      )
    }
  } else {
    // If token is expired or invalid, check if refresh token is valid
    // If Refresh token is valid, generate new access token
    // Otherwise reject access
    const username = cookieStore.get('username')?.value;
    const refreshCookie = cookieStore.get('refreshCookie')?.value;
    if(username && refreshCookie) {
      try {
        const newAccessToken = await regenerateAccessToken(username ?? '', refreshCookie ?? '');
  
        // Handle the new access token
        const accessTokenCookie = serialize('accessToken', (newAccessToken as string) || '', {
          httpOnly: false,
          secure: false,
          sameSite: 'strict',
          path: '/',
        });
  
        // Return the new access token
        return NextResponse.json(
          {
            message: 'Authenticated with new token!'
          },
          {
            status: 200,
            headers: { 'Set-Cookie': accessTokenCookie },
          }
        );
      } catch(error) {
        // Handle the error, e.g., redirect to login page
        // Redirect to login page or show a login modal
        console.error('Error refreshing access token:', error);
        return NextResponse.json(
          {
            message: 'Unauthorised!'
          },
          {
            status: 401,
            headers: { 'Set-Cookie': seralized },
          }
        );
      }
    } else {
      // Token is expired or invalid, return error
      return NextResponse.json(
        {
          message: 'Unauthorised!'
        },
        {
          status: 401,
          headers: { 'Set-Cookie': seralized},
        }
      )
    }
  }
}

// Function to decode JWT token (using JSON Web Token library)
const parseJwt = (token: string) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64));
  return JSON.parse(jsonPayload);
};
