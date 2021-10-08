import React from 'react';
import {Image} from 'react-bootstrap';
import avita from '../edited_logos/avita.gif';
import crestron from '../edited_logos/Crestron.gif';
import fireframe from '../edited_logos/fireframe.gif';
import flyAR from '../edited_logos/flyAR.gif';
import foodandco from '../edited_logos/foodandco.gif';
import metropolia from '../edited_logos/metropolia.gif';
import panasonic from '../edited_logos/panasonic.gif';
import sony from '../edited_logos/Sony.gif';
import swappie from '../edited_logos/swappie.gif';
import trail from '../edited_logos/trail.gif';

const Logos = () => {
    return (
        <>
            <Image src={avita} fluid />
            <Image src={crestron} fluid />
            <Image src={fireframe} fluid />
            <Image src={flyAR} fluid />
            <Image src={foodandco} fluid />
            <Image src={metropolia} fluid />
            <Image src={panasonic} fluid />
            <Image src={sony} fluid />
            <Image src={swappie} fluid />
            <Image src={trail} fluid />

        </>
    )
}

export default Logos;
