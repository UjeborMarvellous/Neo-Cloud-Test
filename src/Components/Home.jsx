import React from "react";
import Img01 from "./Images/01.jpg";
import Img02 from "./Images/Main.jpg";
import Img10 from "./Images/13.jpg";
import { Link } from "react-router-dom";
import AutoPlayMethod from "./Carousel";
import OurService from "./OurService";
import Accordion from "./Accordion";
import Img09 from './Images/07.jpg'
import AutoPlayMethods from "./CarouselTwo";
import Counting from "./Counting";
import Thumb from './Images/14.jpg'
import Play from './Images/Play.png'
import Footer from "./Footer";

function Home() {
    return (
        <div className="selection:bg-yellow-600 selection:text-white">
            <div className="first">
                <img src={Img01} alt="" className="relative z-40 h-screen w-screen object-cover" />
                <div className="text bg-black/50 z-40  absolute top-9 w-full lg:pt-[17%] md:pt-[40%] sm:pt-[55%] h-screen pl-[10%]">
                    <p className="text-white uppercase py-3 text-xl Font tracking-widest">IDAHVISNG.COM</p>
                    <p className="lg:text-5xl md:text-5xl sm:text-3xl text-yellow-600 Font py-2">IDAHVIS NIGERIA LIMITED</p>
                    <p className="lg:text-sm md:text-lg sm:text-sm text-white lg:w-[40%] tracking-wider mb-10 font-semibold">
                        We are pleased to firstly introduce to you our company IDAHVIS NIGERIA
                        LIMITED, incorporated in 2017 under the companies and Allied Matters
                        Act of 1990 with RC Number “1451843”. It is a wholly Nigerian
                        indigenous company
                    </p>
                    <div className="read">
                        <Link to="/" className="py-3 lg:px-7 md:px-16 sm:px-8 -mt-16 rounded-full text-white bg-red-900 uppercase text-sm font-semibold">Read More...</Link>
                    </div>
                </div>
                <div className="lg:-mt-[15%] md:-mt-[25%] relative z-40">
                    <AutoPlayMethod className=" top-0" />
                </div>
            </div>
            <div className="second lg:-mt-[17%] md:-mt-[35%] absolute z-0">
                <img src={Img02} alt="" className="fixed top-0 h-full w-screen" />
            </div>
            <div className="z-40 relative pb-32">
                <OurService />
            </div>
            <div className="z-30 relative">
                <img src={Img09} alt="" className=" absolute top-0 h-[110%] w-full object-cover" />
                <div className="grid lg:grid-cols-2 md:grid-cols-1 relative pt-24">
                    <div className="my-auto lg:mx-20 md:mx-10 sm:mx-3">
                        <div className="Ceo bg-white/10 py-16 px-10">
                            <p className="text-white font-bold pb-5 Font tracking-widest text-4xl">CEO'S DESK</p>
                            <p className="text-white text-sm font-semibold">In order to ensure effective integrated and support services at the end users point, we operate and maintain a well-equipped office with highly skilled and experience professionals that guarantee satisfaction.</p>
                        </div>
                    </div>
                    <Accordion />
                </div>
            </div>
            <div className="z-40 relative pt-32">
                <div className="text lg:px-16 md:px-10 sm:px-6 sm:text-center lg:text-left">
                    <p className="lg:text-2xl md:text-xl sm:text-lg font-extrabold text-white border-b border-white/20 pb-6">SOME OF OUR PROJECTS AND RATINGS</p>
                </div>
                <AutoPlayMethods />
            </div>
            <div className="z-40 relative">
                <img src={Img10} alt="" className=" absolute top-0 lg:h-[110%] md:h-screen sm:h-[100%] w-full lg:object-contain sm:object-cover" />
                <div className="relative pt-[1%] mx-[6%]">
                    <h1 className="lg:text-4xl md:text-xl sm:text-lg font-extrabold text-white pt-32">A Few Facts About idahvis</h1>
                    <div className="lg:grid lg:grid-cols-2 gap-20 pt-[8%] ">
                        <Counting />
                        <div className="video pb-10">
                            <Link to="https://www.youtube.com/watch?v=HndV87XpkWg" className="rounded-2xl">
                                <img src={Thumb} alt="" className="rounded-2xl h-[80%] w-full relative object-cover" />
                                <img src={Play} alt="" className="absolute lg:-mt-[17.7%] lg:mx-[21%] sm:-mt-[45%] sm:mx-[43%]"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="z-40 relative">
                <Footer />
            </div>
        </div>
    );
}

export default Home;
