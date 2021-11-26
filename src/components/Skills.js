import { skills } from "../utils/data";
import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Skills = () => {
    const [allSkills, setAllSkills] = useState(skills);
    useEffect(() => {
        setAllSkills(skills);
    }, []);
    //set skill/tech graphics size
    const styles = {
        graphics: {
            height: "100px",
            width: "100px",
        },
    };
    console.log(allSkills);
    return (
        <>
            <section className="bg-white">
                <div className="container pt-4 pb-4">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 text-md-center mobile-center">
                            <h2>
                                Skills and{" "}
                                <span className="font-weight-bold">
                                    Technologies
                                </span>
                            </h2>
                            <p>Never stop learning.</p>
                            {/* transform: translate3d(-3809px, 0px, 0px); transition: all 0.25s ease 0s; width: 13335px; */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col partners align-items-center">
                            <OwlCarousel
                                className="owl-carousel"
                                loop={true}
                                items={6}
                                nav={false}
                                dots={false}
                                autoplay={true}
                            >
                                {allSkills.map((element) => (
                                    <div key={element.id}>
                                        <div className="logo">
                                            <img
                                                src={element.graphic}
                                                alt={element.title}
                                                style={styles.graphics}
                                            />
                                        </div>
                                        <div className="mt-3 text-muted">
                                            {element.title}
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>
                            ;
                            {/* <div
                                className="owl-carousel"
                                data-items="[6,4,2]"
                                data-loop="true"
                                data-autoplay="true"
                            >
                                {allSkills.map((element) => (
                                    <div key={element.id}>
                                        <div className="logo">
                                            <img
                                                src={element.graphic}
                                                alt={element.title}
                                                style={styles.graphics}
                                            />
                                        </div>
                                        <div className="mt-3 text-muted">
                                            {element.title}
                                        </div>
                                    </div>
                                ))}
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;
