import React, { Component } from "react";
import Slider from "react-slick";
import Img01 from './Images/08.jpg'
import Img02 from './Images/09.jpg'
import Img03 from './Images/10.jpg'
import Img04 from './Images/12.jpg'
import {AiFillStar} from 'react-icons/ai'

const items = [
    { 
        Icon: Img01, 
        Title: "Lorem ipsum dolor sit amet consectetur.",
        Icons: <AiFillStar />,
    },
    { 
        Icon: Img02, 
        Title: "Lorem ipsum dolor sit amet consectetur.",
        Icons: <AiFillStar />,
    },
    { 
        Icon: Img03, 
        Title: "Lorem ipsum dolor sit amet consectetur.",
        Icons: <AiFillStar />,
    },
    { 
        Icon: Img04, 
        Title: "Lorem ipsum dolor sit amet consectetur.",
        Icons: <AiFillStar />,
    },
    { 
        Icon: Img01, 
        Title: "Lorem ipsum dolor sit amet consectetur.",
        Icons: <AiFillStar />,
    },
    { 
        Icon: Img02, 
        Title: "Lorem ipsum dolor sit amet consectetur.",
        Icons: <AiFillStar />,
    },
    { 
        Icon: Img03, 
        Title: "Lorem ipsum dolor sit amet consectetur.",
        Icons: <AiFillStar />,
    },
    { 
        Icon: Img04, 
        Title: "Lorem ipsum dolor sit amet consectetur.",
        Icons: <AiFillStar />,
    },
    
]
export default class AutoPlayMethods extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 6000,
            cssEase: "linear",
            responsive: [
              {
                breakpoint: 850,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 450,
                settings: {
                  slidesToShow: 1,
                },
              },
            ],
          };
        return (
            <div>
                <div className="dev items-center relative text-center px-[4%] py-10">
                    <Slider ref={slider => (this.slider = slider)} {...settings} className="ov overflow-hidden">
                        {items.map((items, index) => (
                            <div className="text px-2 py-10 cursor-grab" key={index}>
                                <div className="bg rounded-xl">
                                    <img src={items.Icon} alt="" className="mx-auto w-[100%] object-contain" />
                                    <div className="bg-white">
                                        <p className="text-xl text-center px-20 border-b border-gray-400/40 font-semibold py-3">{items.Title}</p>
                                        <div className="flex py-6 px-10 gap-1">
                                            <p className="text-sm text-yellow-500">{items.Icons}</p>
                                            <p className="text-sm text-yellow-500">{items.Icons}</p>
                                            <p className="text-sm text-yellow-500">{items.Icons}</p>
                                            <p className="text-sm text-yellow-500">{items.Icons}</p>
                                            <p className="text-sm text-yellow-500">{items.Icons}</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}