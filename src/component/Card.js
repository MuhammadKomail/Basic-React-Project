import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import imge from '../images/logo.png'
import Button from '@mui/material/Button';
import PrettyRating from "pretty-rating-react";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { useState } from 'react';
import {
    faHeart,
    faStar,
    faHeartBroken,
    faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
    faHeart as farHeart,
    faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";



export default function Card() {
    const icons = {
        star: {
            complete: faStar,
            half: faStarHalfAlt,
            empty: farStar,
        },
        heart: {
            complete: faHeart,
            half: faHeartBroken,
            empty: farHeart,
        },
    };

    const colors = {
        star: ['#d9ad26', '#d9ad26', '#434b4d'],
        heart: ['#9b111e', '#a83f39'],
    };

    const [style, setStyle] = useState({ display: 'none' });

    return <>
        <div className='cardMain'
            onMouseEnter={e => {
                setStyle({ display: 'block',opacity:2.7});
            }}
            onMouseLeave={e => {
                setStyle({ display: 'none' })
            }}
        >
            <div className='disc'>23%</div>
            <div className='cardFirst'>
                <img src={imge} alt="Logo" className='img' />
                <div className='cardTopLeft1'>RECOMMENDED</div>
                <div style={style} className="card-top-right1"><FavoriteBorderIcon /></div>
                <div style={style} className="card-top-right2"><FullscreenIcon /></div>
            </div>
            <div className='cardSecond'>
                <p className='cardFirstproduct'>All Natural Italian-Style Chicken Meatballs</p>
                <p className='cardSecondproduct'>IN STOCK</p>
                <p className='cardThirdproduct' ><PrettyRating value={5} sx={{ fontSize: 3 }} icons={icons.star} colors={colors.star} /></p>
                <div className='cardFourthproduct'>
                    <div className='cardFourthproductFirst'><del>$150</del>&nbsp;&nbsp;</div>
                    <div className='cardFourthproductSecond'>$70</div>
                </div>
            </div>
            <Button style={style} sx={{ borderRadius: 10, paddingRight: 5, paddingLeft: 5, display: "inline-block", marginRight: 2, marginLeft: 2, marginBottom: 3, marginTop: 1 }} variant="contained">ADD TO CART</Button>
    </div>


    
    </>
}
