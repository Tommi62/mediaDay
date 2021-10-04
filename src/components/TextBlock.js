import React from 'react';
import {Carousel} from 'react-bootstrap';


const TextBlock = ({header, paragraph}) => {
    if (paragraph == null) {
        return (
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://placekitten.com/800/800?text=Third slide&bg=20232a"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>{header}</h3>
                </Carousel.Caption>
            </Carousel.Item>
        )
    } else return (
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
            />

            <Carousel.Caption>
                <h3>{header}</h3>
                <p>
                    {paragraph}
                </p>
            </Carousel.Caption>
        </Carousel.Item>
    )
}

export default TextBlock;