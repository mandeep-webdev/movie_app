import './styles.scss';
import HeroBanner from './heroBanner/HeroBanner';
import TrendingMovies from './trending/TrendingMovies';
import TrendingTv from './trending/TrendingTv';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
const Home = () => {
  return (
    <div>
      <HeroBanner />
      <TrendingMovies />
      <TrendingTv />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
