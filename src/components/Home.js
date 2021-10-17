import Hero from "./Hero";
import Contact from "./Contact";
import About from "./About";
import AboutCards from "./AboutCards";

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <About />
            <AboutCards />
            <Contact />
        </div>
    );
};

export default Home;
