import React from 'react';
import HomeBanner from '../../components/BannerSlider';
import LatestRelease from '../../components/LatestRelease';
import Download from '../../components/Download';
import TopMovie from '../../components/TopMovies';
import SuperHeroes from '../../components/Superheroes';
import Geography from '../../components/Geography';
import GeograpicSlider from '../../components/GeograpicSlider';
import VideoSec from '../../components/VideoSliderSec';
import Brands from '../../components/Brands';
import Donate from '../../components/Donate';

const Home = () => {
  return (
    <>
      <HomeBanner />
      <LatestRelease />
      <Download />
      <TopMovie />
      <SuperHeroes />
      <Geography />
      <GeograpicSlider />
      <VideoSec/>
      <Brands />
      <Donate />
    </>
  );
}

export default Home;
