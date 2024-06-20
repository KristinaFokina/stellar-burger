<<<<<<< HEAD
import { ConstructorPage, Feed, Login, NotFound404 } from '@pages';
=======
import { ConstructorPage } from '@pages';
>>>>>>> ac40a997d38dcffa4ae8e0725ddf13bd1d85c75a
import '../../index.css';
import styles from './app.module.css';

import { AppHeader } from '@components';
<<<<<<< HEAD
import { Route, Routes, useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  const backgroundLocation = location.state?.background;
  console.log('My project');
  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes location={backgroundLocation || location}>
        <Route path='/' element={<ConstructorPage />} />
        <Route path='feed/' element={<Feed />} />
        <Route path='*' element={<NotFound404 />} />
        {/* <Route
          path='/login'
          element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </div>
  );
};
=======

const App = () => (
  <div className={styles.app}>
    <AppHeader />
    <ConstructorPage />
  </div>
);
>>>>>>> ac40a997d38dcffa4ae8e0725ddf13bd1d85c75a

export default App;
