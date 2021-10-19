import { skills } from "../utils/data";

const Skills = () => {
    const styles = {
        graphics: {
            height: "100px",
            width: "100px",
        },
    };
    return (
        <>
            <section class="separator-top">
                <div class="container mt-5 mb-1">
                    <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-6 text-md-center mobile-center">
                            <h2>
                                Skills and{" "}
                                <span class="font-weight-bold">
                                    Technologies
                                </span>
                            </h2>
                            <p>Never stop learning.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col partners align-items-center">
                            <div
                                class="owl-carousel"
                                data-items="[6,4,2]"
                                data-loop="true"
                                data-autoplay="true"
                            >
                                {skills.map((element) => (
                                    <div key={element.id}>
                                        <div class="logo">
                                            <img
                                                src={element.graphic}
                                                alt={element.title}
                                                style={styles.graphics}
                                            />
                                        </div>
                                        <div class="mt-3 text-muted">
                                            {element.title}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;
