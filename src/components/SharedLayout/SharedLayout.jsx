import { Suspense } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { PagesList, PageItem, PageContainer } from './SharedLayout.styled';

const SharedLayout = () => {
  const location = useLocation();

  return (
    <PageContainer>
      <header>
        <nav>
          <PagesList>
            <PageItem>
              <NavLink exact to="/" state={{ from: location }}>
                Home page
              </NavLink>
            </PageItem>
            <PageItem>
              <NavLink to="/movies" state={{ from: location }}>
                Movies
              </NavLink>
            </PageItem>
          </PagesList>
        </nav>
      </header>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </PageContainer>
  );
};

export default SharedLayout;
