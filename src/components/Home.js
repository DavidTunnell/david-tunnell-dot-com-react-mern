import Hero from "./Hero";
import Contact from "./Contact";
import About from "./About";
import Portfolio from "./Portfolio";
import Map from "./Map";
import Skills from "./Skills";
import PortfolioModal from "./PortfolioModal";
import useScrollToTop from "../utils/useScrollToTop";

const Home = () => {
    useScrollToTop();
    return (
        <div className="home">
            <Hero />
            <About />
            <PortfolioModal />
            <Portfolio />
            <Skills />
            <Contact />
            <Map />
        </div>
    );
};

export default Home;
