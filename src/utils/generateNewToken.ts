import { regenerateAccessToken } from '@/components/aws-cognito/GenerateAccessToken';
import { setCookie, parseCookies } from 'nookies';

export const generateNewToken = async () => {
  const username = parseCookies().username;
  const refreshCookie = parseCookies().refreshCookie;

  try {
    const newAccessToken = await regenerateAccessToken(username ?? '', refreshCookie ?? '');
    setCookie(null, 'accessToken', (newAccessToken as string), {
      path: '/',
    })
  } catch(error) {
    return 'Refresh token is expired!'
  } 
}