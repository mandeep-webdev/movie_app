import { useEffect } from 'react';
import { fetchDataFromApi } from './utils/app';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration, getGenres } from './store/slice';

function App() {
  const { url } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await fetchDataFromApi('/movie/popular');
    dispatch(getApiConfiguration(res));
    console.log(res);
  };

  return (
    <>
      <div className="App">App{url?.total_pages}</div>
    </>
  );
}

export default App;
