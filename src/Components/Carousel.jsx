import React, { Component } from "react";
import Slider from "react-slick";
import Img01 from './Images/03.png'
import Img02 from './Images/04.png'
import Img03 from './Images/05.png'
import Img09 from './Images/02.jpg'

const items = [
    { 
        Icon: Img01, 
        Title: "Our Mission",
        Text: "we are commmitted to consistently deliver quality project on schedule using innovative cost effective solutions within a defined budget"
    },
    { 
        Icon: Img02, 
        Title: "Our Vision",
        Text: "To become a leading solution, project management & Construction, General contracts and supplies in Nigeria"
    },
    { 
        Icon: Img03, 
        Title: "Core Values",
        Text: "Family",
        Text1: "Transparency",
        Text2: "Intergrity"
    },
    { 
        Icon: Img01, 
        Title: "Our Mission",
        Text: "we are commmitted to consistently deliver quality project on schedule using innovative cost effective solutions within a defined budget"
    },
    { 
        Icon: Img02, 
        Title: "Our Vision",
        Text: "To become a leading solution, project management & Construction, General contracts and supplies in Nigeria"
    },
    { 
        Icon: Img03, 
        Title: "Core Values",
        Text: "Family",
        Text1: "Transparency",
        Text2: "Intergrity"
    },
    
]
export default class AutoPlayMethod extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
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
                <div className="dev items-center relative text-center px-[1%] py-10">
                    <Slider ref={slider => (this.slider = slider)} {...settings} className="ov overflow-hidden">
                        {items.map((items, index) => (
                            <div className="text py-10 cursor-grab" key={index}>
                                <div className="bg mx-3 px-12 h-[18rem] rounded-xl" style={{background: `url(${Img09})`, backgroundSize: "cover"}}>
                                    <img src={items.Icon} alt="" className="mx-auto pt-10" />
                                    <p className="text-2xl font-bold text-white py-3">{items.Title}</p>
                                    <p className="text-sm text-white">{items.Text}</p>
                                    <p className="text-sm py-2 text-white">{items.Text1}</p>
                                    <p className="text-sm text-white">{items.Text2}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}