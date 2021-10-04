import React, {useState} from 'react';
import {Carousel} from 'react-bootstrap';

const TextCarousel = ({textArray}) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://placekitten.com/800/300?text=First slide&bg=373940"
                        alt="Ensimmäinen dia"
                    />
                    <Carousel.Caption className='carouselCaption'>
                        <h3>{textArray.homepage.intro} </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://placekitten.com/801/300?text=Second slide&bg=282c34"
                        alt="Second slide"
                    />

                    <Carousel.Caption className='carouselCaption'>
                        <h3>{textArray.homepage.header1}</h3>
                        <p>{textArray.homepage.paragraph1}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://placekitten.com/802/300?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />

                    <Carousel.Caption className='carouselCaption'>
                        <h3>{textArray.homepage.header2}</h3>
                        <p>{textArray.homepage.paragraph2}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://placekitten.com/798/300?text=Fourth slide&bg=20232a"
                        alt="Third slide"
                    />

                    <Carousel.Caption className='carouselCaption'>
                        <h3>{textArray.homepage.header3}</h3>
                        <p>{textArray.homepage.paragraph3}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default TextCarousel;
