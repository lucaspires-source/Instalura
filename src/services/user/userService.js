import { isStagingEnv } from '../../infra/env/isStagingEnv';
import { HttpClient } from '../../infra/http/HttpClient';
import { authService } from '../auth/authService';

const BASE_URL = isStagingEnv
// back end de Dev
  ? ' https://instalura-api-git-master-omariosouto.vercel.app'
// back end de PROD
  : 'https://instalura-api.omariosouto.vercel.app';
export const userService = {
  async getProfilePage(ctx) {
    const url = `${BASE_URL}/api/users/posts`;
    try {
      const token = await authService(ctx).getToken();
      const response = await HttpClient(url, {
        headers: {
          Autorization: `Bearer ${token}`,
        },
      });
      return {
        user: {
          totalLikes: 100,
        },
        posts: [response.data],
      };
    } catch (err) {
      throw new Error('Nao conseguiu trazer dados do cliente');
    }
  },
};
