import { useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import Carousel from '../../../components/carousel/Carousel';
import useFetch from '../../../hooks/useFetch';

const TrendingTv = () => {
  const [endpoint, setEndpoint] = useState('day');
  const { data, loading } = useFetch(`/trending/tv/${endpoint}`);

  const onTabChange = (tab) => {
    setEndpoint(tab === 'Day' ? 'day' : 'week');
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending TV Shows</span>
        <SwitchTabs data={['Day', 'Week']} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default TrendingTv;
