import { ConstructorPage, Feed, Login, NotFound404 } from '@pages';
import '../../index.css';
import styles from './app.module.css';

import { AppHeader } from '@components';
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

export default App;
