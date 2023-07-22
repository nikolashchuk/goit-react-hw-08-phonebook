import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';

import Header from 'components/Header/Header';

export default function Layout() {
  return (
    <Container>
      <Header />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
