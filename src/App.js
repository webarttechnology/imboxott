import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/style.css";
import "../src/assets/css/all.min.css";

import HomeBanner from "./components/BannerSlider";
import Download from "./components/Download";
import Geography from "./components/Geography";
import GeograpicSlider from "./components/GeograpicSlider";
import Header from "./components/Header";
import LatestRelease from "./components/LatestRelease";
import Superheroes from "./components/Superheroes";
import TopMovie from "./components/TopMovies";
import "react-multi-carousel/lib/styles.css";
import VideoSlider from "./components/VideoSlider";
import Brands from "./components/Brands";
import Donate from "./components/Donate";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
function App() {
  return (
    <>
      <Header />
      <HomeBanner />
      <LatestRelease />

      <Download />
      <TopMovie />
      <Superheroes />
      <Geography />
      <GeograpicSlider />
      <VideoSlider />
      <Brands />
      <Donate />
      <Footer />
    </>
  );
}

export default App;
