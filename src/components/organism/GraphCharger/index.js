import React, { useState } from 'react';
import Graph from '../../molecules/Graph';
import { useEffect } from 'react';
import Button from '../../atoms/button'

const GraphCharger = (props) => {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setData(props.data)
        setLoading(false)
    }, [props.data])

    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlide = (index) => {
        setActiveIndex(index);
    };

    return (
        <div>
            <div className="container overflow-hidden text-center">
                {!loading ?
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            {
                                data.graphs.map((_, index) => (
                                    <Button
                                        key={index}
                                        type="primary"
                                        variant={"primary"}
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to={index}
                                        className={index === activeIndex ? "active" : ""}
                                        aria-current={index === activeIndex ? "true" : ""}
                                        aria-label={`Slide ${index + 1}`}
                                    ></Button>
                                ))}
                        </div>
                        <div className="carousel-inner">
                            {data.graphs.map((graph, index) => (
                                <div
                                    key={index}
                                    className={`carousel-item ${index === activeIndex ? "active" : ""}`}
                                >
                                    <Graph data={graph} />
                                </div>
                            ))}
                        </div>
                        <Button
                            className="carousel-control-prev"
                            variant={"outline-primary"}
                            type='button'
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev"
                            onClick={() => handleSlide(activeIndex - 1)}
                            disabled={activeIndex === 0}
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </Button>
                        <Button
                            className="carousel-control-next"
                            variant={"outline-primary"}
                            type='button'
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next"
                            onClick={() => handleSlide(activeIndex + 1)}
                            disabled={activeIndex === data.graphs.length - 1}
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </Button>
                    </div>
                    :
                    <></>
                }
            </div>
        </div>
    );
};

export default GraphCharger;