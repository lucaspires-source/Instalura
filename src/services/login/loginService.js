import { setCookie, destroyCookie } from 'nookies';
import { isStagingEnv } from '../../infra/env/isStagingEnv';
import { HttpClient } from '../../infra/http/HttpClient';

export const LOGIN_COOKIE_APP_TOKEN = 'APP_TOKEN';
const BASE_URL = isStagingEnv
// back end de Dev
  ? ' https://instalura-api-git-master-omariosouto.vercel.app'
// back end de PROD
  : 'https://instalura-api.omariosouto.vercel.app';
export const loginService = {
  async login({ username, password },
    setCookieModule = setCookie,
    HttpClientModule = HttpClient) {
    return HttpClientModule(`${BASE_URL}/api/login`, {
      method: 'POST',
      body: {
        username,
        password,
      },
    })
      .then((res) => {
        const { token } = res.data;
        const hasToken = token;
        console.log(token);
        if (!hasToken) {
          throw new Error('Failed to login');
        }
        const DAY_IN_SECONDS = 86400;
        setCookieModule(null, LOGIN_COOKIE_APP_TOKEN, token, {
          path: '/',
          maxAge: DAY_IN_SECONDS * 7,
        });
        return { token };
      })
      .catch((err) => err);
  },
  async logout(ctx, destroyCookieModule = destroyCookie) {
    destroyCookieModule(ctx, LOGIN_COOKIE_APP_TOKEN, { path: '/' });
  },
};
