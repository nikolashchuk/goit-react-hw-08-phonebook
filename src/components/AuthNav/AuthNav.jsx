import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

export default function AuthNav() {
  const StyledLink = styled(NavLink)`
    color: black;

    &.active {
      color: #0059ff;
    }
  `;

  return (
    <>
      <nav>
        <StyledLink to="login">Login</StyledLink>

        <StyledLink to="register" style={{ marginLeft: '10px' }}>
          Register
        </StyledLink>
      </nav>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
