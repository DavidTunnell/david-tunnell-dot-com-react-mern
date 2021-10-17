import Hero from "./Hero";
import Contact from "./Contact";
import About from "./About";
import AboutCards from "./AboutCards";
import Portfolio from "./Portfolio";
import PortfolioAlt from "./PortfolioAlt";

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <About />
            <AboutCards />
            <Portfolio />
            <PortfolioAlt />
            <Contact />
        </div>
    );
};

export default Home;
