import React from 'react';
import { authService } from '../../src/services/auth/authService';
import { userService } from '../../src/services/user/userService';

const ProfilePage = (props) => {
  const style = {
    display: 'flex',
    justifyContent: 'center',
  };
  return (
    <div style={style}>
      <pre>
        {JSON.stringify(props, null, 4)}
      </pre>
    </div>
  );
};

export default ProfilePage;

export async function getServerSideProps(ctx) {
  const auth = authService(ctx);
  const hasActiveSession = await auth.hasActiveSession();
  if (hasActiveSession) {
    const session = await auth.getSession();
    const profilePage = await userService.getProfilePage(ctx);
    return {
      props: {
        user: {
          ...session,
          ...profilePage.user,
        },
        posts: profilePage.posts,
      },
    };
  }

  ctx.res.writeHead(307, { location: '/login' });
  ctx.res.end();

  return {
    props: {},
  };
}
