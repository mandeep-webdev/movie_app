import './styles.scss';
import HeroBanner from './heroBanner/HeroBanner';
import TrendingMovies from './trending/Trending';
const Home = () => {
  return (
    <div>
      <HeroBanner />
      <TrendingMovies />
      <div style={{ height: '1000px' }}></div>
    </div>
  );
};

export default Home;
