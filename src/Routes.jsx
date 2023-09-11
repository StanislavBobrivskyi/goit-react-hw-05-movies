import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./components/Home/Home'));
const Movies = lazy(() => import('./components/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('./components/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

function Routes() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/movies/:movieId" component={MovieDetails} />
          <Route path="/movies/:movieId/cast" component={Cast} />
          <Route path="/movies/:movieId/reviews" component={Reviews} />
          <Route render={() => <div>Page not found</div>} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
