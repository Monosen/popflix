import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from 'react-router-dom';
import Cookie from 'js-cookie';

import './App.css';

import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';
import Serie from './pages/Series/Serie';
import Welcome from './pages/Welcome/Welcome';
import SignIn from './pages/Auth/SignUp';
import SignUp from './pages/Auth/SignIn';
import Movie from './pages/Movies/Movie';

function App() {
  const pageValidation = (page: JSX.Element): JSX.Element => {
    if (Cookie.get('token')) {
      return page;
    } else {
      return <Navigate to="/welcome" />;
    }
  };
  const pageValidationWithoutToken = (page: JSX.Element): JSX.Element => {
    if (!Cookie.get('token')) {
      return page;
    } else {
      return <Navigate to="/" />;
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={pageValidation(<Home />)} />
        <Route
          path="/welcome"
          element={pageValidationWithoutToken(<Welcome />)}
        />
        <Route path="/movies" element={pageValidation(<Movies />)} />
        <Route path="/series" element={pageValidation(<Series />)} />
        <Route path="/serie/:code" element={pageValidation(<Serie />)} />
        <Route path="/movie/:code" element={pageValidation(<Movie />)} />
        <Route
          path="/signin"
          element={pageValidationWithoutToken(<SignIn />)}
        />
        <Route
          path="/signup"
          element={pageValidationWithoutToken(<SignUp />)}
        />
      </Routes>
    </Router>
  );
}

export default App;
