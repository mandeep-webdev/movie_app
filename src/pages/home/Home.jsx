import './styles.scss';
import HeroBanner from './heroBanner/HeroBanner';
import TrendingMovies from './trending/TrendingMovies';
import TrendingTv from './trending/TrendingTv';
import Popular from './popular/Popular';
const Home = () => {
  return (
    <div>
      <HeroBanner />
      <TrendingMovies />
      <TrendingTv />
      <Popular />
      <div style={{ height: '1000px' }}></div>
    </div>
  );
};

export default Home;
