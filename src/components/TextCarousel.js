import React, {useState} from 'react';
import {Carousel} from 'react-bootstrap';
import peopleImg from '../images/carousel/people.jpeg';
import metropoliaImg from '../images/carousel/metropolia.jpeg';
import chillImg from '../images/carousel/chill.jpeg';
import speakerImg from '../images/carousel/speaker.jpeg';


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
                        src={metropoliaImg + '?text=First slide&bg=373940'}
                        alt="Ensimmäinen dia"
                    />
                    <Carousel.Caption className='carouselCaption'>
                        <h3>{textArray.homepage.intro} </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={speakerImg + '?text=Second slide&bg=282c34'}
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
                        src={peopleImg + '?text=Third slide&bg=20232a'}
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
                        src={chillImg + '?text=Third slide&bg=20232a'}
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
