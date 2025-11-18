import { Fragment, useEffect, useCallback } from 'react';
import GlobalStyle from './styles/globalStyles';
import MainRouter from './routes';
import { BrowserRouter } from 'react-router-dom';
import { useLocation } from 'react-use';
import api from './api/api';
import { fetchProfile } from './features/profile/profileSlice';
import { useAppSelector, useAppDispatch } from './hooks';
import { debounce } from 'lodash'; // Import debounce from lodash library
import { fetchCoinStats } from './features/globalSlice';

function App() {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const accessToken = useAppSelector((state) => state.auth.accessToken);

  const fetchProfileDebounced = useCallback(
    debounce(() => {
      if (accessToken && accessToken !== '') {
        dispatch(fetchProfile(accessToken));
      }
    }, 300),
    [accessToken, dispatch]
  );
  useEffect(() => {
    fetchProfileDebounced(); // Initial call
    return () => fetchProfileDebounced.cancel(); // Cleanup on unmount
  }, [fetchProfileDebounced]);

  useEffect(() => {
    dispatch(fetchCoinStats());
  }, [dispatch]);


  useEffect(() => {
    window.scrollTo(0, 0);
    const savedToken = localStorage.getItem('access_token');
    if (savedToken) {
      api.setAccessToken(savedToken);
    }
  }, [pathname]);



  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
