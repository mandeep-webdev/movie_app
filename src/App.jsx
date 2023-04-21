import { useEffect } from 'react';
import { fetchDataFromApi } from './utils/app';
import './App.css';

function App() {
  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await fetchDataFromApi('/movie/latest');
    console.log(res);
  };

  return (
    <>
      <div className="App">App</div>
    </>
  );
}

export default App;
