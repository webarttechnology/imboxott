import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/all.min.css";
import "../src/assets/css/style.css";
import "../src/assets/css/responsive.css";



import HomeBanner from "./components/BannerSlider";
import Download from "./components/Download";
import Geography from "./components/Geography";
import GeograpicSlider from "./components/GeograpicSlider";
import Header from "./components/Header";
import LatestRelease from "./components/LatestRelease";
import Superheroes from "./components/Superheroes";
import TopMovie from "./components/TopMovies";
import "react-multi-carousel/lib/styles.css";
import VideoSec from "./components/VideoSliderSec";
import Brands from "./components/Brands";
import Donate from "./components/Donate";
import Footer from "./components/Footer";
import AppRouter from "./router/AppRouter";
function App() {
  return (
    <>
      <AppRouter/>
    </>
  );
}

export default App;
