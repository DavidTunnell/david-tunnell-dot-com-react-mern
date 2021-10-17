import Hero from "./Hero";
import Contact from "./Contact";
import About from "./About";
import AboutCards from "./AboutCards";
import Portfolio from "./Portfolio";
import PortfolioAlt from "./PortfolioAlt";
import Map from "./Map";
import MapTest from "./MapTest";

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <About />
            <AboutCards />
            <Portfolio />
            <PortfolioAlt />
            <Contact />
            <MapTest />
        </div>
    );
};

export default Home;
