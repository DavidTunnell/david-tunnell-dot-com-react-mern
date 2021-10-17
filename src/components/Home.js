import Hero from "./Hero";
import Contact from "./Contact";
import About from "./About";
import AboutCards from "./AboutCards";
import Portfolio from "./Portfolio";

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <About />
            <AboutCards />
            <Portfolio />
            <Contact />
        </div>
    );
};

export default Home;
