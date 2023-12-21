import { NextResponse } from 'next/server';
import { serialize } from 'cookie';
import { cookies } from 'next/headers';

// Cookies name
// const COOKIE_NAME = process.env.COOKIE_NAME

// API for logout user
export async function POST() {
  try {
    const response = {
      message: 'Logout!'
    }

    const accessTokenCookie = serialize('accessToken', '', {
      httpOnly: false,
      secure: false,
      sameSite: 'strict',
      maxAge: 0,
      path: '/',
    });

    const refreshCookie = serialize('refreshCookie',  '', {
      httpOnly: false,
      secure: false,
      sameSite: 'strict',
      maxAge: 0,
      path: '/',
    });

    
    let combinedCookies = [accessTokenCookie, refreshCookie].join(', ');

    const cookieStore = cookies();
    const rememberedUsername = cookieStore.get('rememberedUsername');
    if(rememberedUsername?.value !== 'true') {
      const usernameCookie = serialize('username',  '', {
        httpOnly: false,
        secure: false,
        sameSite: 'strict',
        maxAge: 0,
        path: '/',
      });
      combinedCookies = [combinedCookies, usernameCookie].join(', ');
    }
  
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { 'Set-Cookie': combinedCookies},
    })

  } catch (error) {
    return NextResponse.json(
    {
      message: error
    },
    {
      status: 401,
    }
  )
  }
}