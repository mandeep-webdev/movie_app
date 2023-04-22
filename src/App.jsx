import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchDataFromApi } from './utils/app';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration } from './store/slice';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/PageNotFound';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  const { url } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = async () => {
    const res = await fetchDataFromApi('/configuration');

    const url = {
      backdrop: res.images.secure_base_url + 'original',
      poster: res.images.secure_base_url + 'original',
      profile: res.images.secure_base_url + 'original',
    };
    // console.log(res);

    dispatch(getApiConfiguration(url));
  };

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
